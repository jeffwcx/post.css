import mdUrl from 'url:../example.md';
import { useEffect, useState } from 'react';
import { marked } from 'marked';
import { RadioGroup } from '@headlessui/react';

const themes = [
  { name: '默认', color: '#f7c600' },
  { name: '清灰', color: '#545158' },
];


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
  const [theme, setTheme] = useState(themes[0].color);

  const [md, setMD] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(mdUrl);
        const text = await response.text();
        const result = marked(text);
        setMD(result);
      } catch (error) {
        setMD('加载错误');
      }
    }
    fetchData();
  }, []);
  return (
    <div className="p-2 md:p-5 font-sans">
      <div className="md:max-w-3xl md:mx-auto">
        <h1 className="text-3xl font-medium text-slate-900 py-2">POST.CSS 主题选择</h1>
        <RadioGroup value={theme} onChange={setTheme}>
          <RadioGroup.Label className="sr-only">主题选择</RadioGroup.Label>
          <div className="select-area pt-4 pb-12 flex space-x-5">
            {themes.map((theme) => (
              <RadioGroup.Option
                key={theme.name}
                className="relative w-28 h-28 flex justify-center items-center cursor-pointer opacity-80 rounded-lg text-white"
                style={{
                  'background': theme.color,
                }}
                value={theme.color}
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
      </div>
      <div className="md:max-w-3xl md:mx-auto p-6 md:p-12 border shadow-lg rounded-2xl">
        {
          md ? (
            <div className="markdown" dangerouslySetInnerHTML={{ __html: md }} />
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