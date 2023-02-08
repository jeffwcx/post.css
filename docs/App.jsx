import mdUrl from 'url:../example.md';
import { useEffect, useState } from 'react';
import { marked } from 'marked';
import { RadioGroup } from '@headlessui/react';
import Highlight from 'highlight.js';
import 'highlight.js/styles/paraiso-dark.css';

marked.setOptions({
  highlight(code, lang) {
    let result = '';
    if (lang && Highlight.getLanguage(lang)) {
      result = Highlight.highlight(code, { language: lang, ignoreIllegals: true }).value;
    }
    return result;
  },
});

const themeMap = {
  'theme-default': "默认",
  'theme-blue': "冰蓝"
};


function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#4ade80" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


export function App() {
  const [themes, setThemes] = useState([]);
  const [theme, setTheme] = useState('');

  const [md, setMD] = useState();

  useEffect(() => {
    const node = document.getElementsByClassName('markdown')[0];
    const style = getComputedStyle(node);
    const str = style.getPropertyValue('--post-builtin-themes');
    const builtinThemes = str.replace(/\s/g, '').split(',');
    const defaultTheme = style.getPropertyValue('--post-theme');
    setThemes(builtinThemes.map((t) => {
      const color = style.getPropertyValue(`--post-theme-${t}-color`);
      return {
        key: t,
        name: themeMap[`theme-${t}`],
        color,
      };
    }));
    setTheme(defaultTheme.trim());
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(mdUrl);
        const text = await response.text();
        const result = marked(text);
        setMD(result);
      } catch (error) {
        console.log(error);
        setMD('加载错误');
      }
    }
    fetchData();
  }, []);
  return (
    <div className="p-2 md:p-5 font-sans">
      <div className="md:max-w-3xl md:mx-auto">
        <h1 className="text-3xl font-medium text-slate-900 py-2">POST.CSS 主题选择</h1>
        {themes.length > 0 && (
          <RadioGroup value={theme} onChange={setTheme}>
            <RadioGroup.Label className="sr-only">Theme Select</RadioGroup.Label>
            <div className="select-area pt-4 pb-12 flex space-x-5">
              {themes.map((theme) => (
                <RadioGroup.Option
                  key={theme.key}
                  className="relative w-28 h-28 flex justify-center items-center cursor-pointer opacity-80 rounded-lg text-white"
                  style={{
                    'background': theme.color,
                  }}
                  value={theme.key}
                >
                  {({ checked }) => (
                    <>
                      <h2 className="text-center">{theme.name}</h2>
                      {checked && (
                        <div className="absolute top-2 left-2 shrink-0 text-white shadow-sm">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        )}
      </div>
      <div className="md:max-w-3xl md:mx-auto p-6 md:p-12 border shadow-lg rounded-2xl">
        {
          md ? (
            <div className={`markdown theme-${theme}`} dangerouslySetInnerHTML={{ __html: md }} />
          ) : (
            <div className="markdown">
              正在加载中
            </div>
          )
        }
      </div>
    </div>
  );
}