import mdUrl from 'url:../example.md';
import { useEffect, useMemo, useState } from 'react';
import { marked } from 'marked';
import { RadioGroup, Switch } from '@headlessui/react';
import { useClipboard } from 'use-clipboard-copy';
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
  );
}


function SunIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>
    </svg>
  );
}


function MoonIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path>
    </svg>
  );
}

function CopyIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
        <path fillRule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path>
        <path fillRule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
    </svg>
  );
}

function CheckWithoutCircleIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
  </svg>
  );
}


const THEMES = [
  {
    key: 'default',
    name: 'Default',
    color: '#f7c600',
  },
  {
    key: 'blue',
    name: 'Ice blue',
    color: '#0e5efe',
  },
];


function CodeBlockWithClipboard({ content }) {
  const clipboard = useClipboard({ copiedTimeout: 1000 });
  return (
    <div className="relative">
      <input ref={clipboard.target} value={content} readOnly hidden />
      <pre>
        <code>{content}</code>
      </pre>
      <button
          className={`absolute top-2 right-2 bg-slate-50 rounded-md p-2 border border-slate-50 ${clipboard.copied ? 'fill-green-500' : 'fill-slate-600'}`}
          onClick={clipboard.copy}
        >
        {clipboard.copied ? <CheckWithoutCircleIcon width="16" height="16" /> : <CopyIcon width="16" height="16" />}
      </button>
    </div>
  );
}

const FULL_VERSION_TEXT = `<link rel="stylesheet" href="https://unpkg.com/post-style/lib/post.min.css">`;


export function App() {
  const [mainTheme, setMainTheme] = useState('default');
  const [dark, setDark] = useState(false);
  const theme = useMemo(() => {
    const themeArr = ['theme'];
    if (mainTheme != 'default') themeArr.push(mainTheme);
    if (dark) themeArr.push('dark');
    return themeArr.join('-');
  }, [mainTheme, dark]);
  
  const [md, setMD] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(mdUrl);
        const text = await response.text();
        const result = marked(text);
        setMD(result);
      } catch (error) {
        console.log(error);
        setMD('Loading error');
      }
    }
    fetchData();
  }, []);

  const standaloneText = useMemo(() => {
    const textarr = ['post', mainTheme];
    if (dark) textarr.push('dark');
    textarr.push('min', 'css');
    return `<link rel="stylesheet" href="https://unpkg.com/post-style/lib/${textarr.join('.')}">`
  }, [mainTheme, dark]);

  const clipboard = useClipboard({ copiedTimeout: 1000 });

  return (
    <div className="p-2 md:p-5 font-sans" style={{ colorScheme: dark ? 'dark' : 'light' }}>
      <div className="md:max-w-3xl md:mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium text-slate-900 py-2">POST.CSS Themes</h1>
          <Switch
          checked={dark}
          onChange={setDark}
          className={`bg-gray-100 relative inline-flex h-[32px] w-[50px] shrink-0 cursor-pointer rounded-full border-1 border-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Mode</span>
          <span
            aria-hidden="true"
            className={`${dark ? 'translate-x-5' : 'translate-x-0'}
              p-2 fill-slate-600 pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          >
            {dark ? <MoonIcon /> : <SunIcon />}
          </span>
        </Switch>
        </div>
        <RadioGroup value={mainTheme} onChange={setMainTheme}>
          <RadioGroup.Label className="sr-only">Theme Select</RadioGroup.Label>
          <div className="select-area pt-4 pb-12 flex space-x-5">
            {THEMES.map((theme) => (
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
        <div className="markdown-body theme-blue">
          <h3>All-in-one</h3>
          <CodeBlockWithClipboard content={FULL_VERSION_TEXT} />
          <h3>Standalone</h3>
          <CodeBlockWithClipboard content={standaloneText} />
          <p>More documents, visit <a href="https://github.com/jeffwcx/post.css">post.css</a></p>
        </div>
      </div>
      <div className="md:max-w-3xl md:mx-auto">
        {
          md ? (
            <div className={`markdown-body p-6 md:p-12 border shadow-lg rounded-2xl ${theme}`} dangerouslySetInnerHTML={{ __html: md }} />
          ) : (
            <div className="markdown-body p-6 md:p-12 border shadow-lg rounded-2xl">
              Loading
            </div>
          )
        }
      </div>
    </div>
  );
}