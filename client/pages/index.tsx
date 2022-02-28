import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const LandingPage: NextPage = () => {
  return (
    <div className="container px-6 py-16 mx-auto text-center ">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl ">
          Remember Docker Command Kubectl Command Git Command etc...
        </h1>
        <p className="mt-6 text-gray-500 dark:text-gray-300">
          Docker,Kubernetes,Git等の各種コマンドをクイズ形式でテストすることで理解を深めましょう。
        </p>
        <div className="my-1">
          <Link href="/auth/signup">
            <a className="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 md:mx-0 md:w-auto focus:outline-none">
              新規登録
            </a>
          </Link>
        </div>
        <p className="mt-3 text-sm text-gray-400 ">
          登録なしでもテストが利用できます
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto mt-20">
        <div className="grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-3">
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <svg
              className="h-12 text-gray-500 fill-current dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="60"
            >
              <g transform="matrix(.215948 0 0 .215948 2.339411 32.398966)">
                <path
                  d="M82.77-82.2a9.81 9.81 0 0 0-3.77 1L28-56.86a9.68 9.68 0 0 0-5.27 6.56L10.24 4.34a9.6 9.6 0 0 0 1.33 7.45q.26.4.55.77L47.4 56.4A9.77 9.77 0 0 0 55 60h56.56a9.77 9.77 0 0 0 7.62-3.63l35.25-43.86a9.6 9.6 0 0 0 1.88-8.18l-12.58-54.7a9.68 9.68 0 0 0-5.27-6.56L87.5-81.2a9.81 9.81 0 0 0-4.73-1z"
                  fill="#326ce5"
                />
                <path
                  d="M83.28-63.6a3.23 3.23 0 0 0-3 3.39v.86a25.44 25.44 0 0 0 .42 2.9 28.49 28.49 0 0 1 .3 5.54 3.33 3.33 0 0 1-1 1.58l-.07 1.3a39.69 39.69 0 0 0-5.51.85A39.23 39.23 0 0 0 54.48-35.8l-1.1-.78a2.41 2.41 0 0 1-1.81-.18 28.48 28.48 0 0 1-4.11-3.71 25.41 25.41 0 0 0-2-2.13l-.68-.54a3.63 3.63 0 0 0-2.12-.8 2.94 2.94 0 0 0-2.43 1.08 3.23 3.23 0 0 0 .75 4.5l.63.5a25.42 25.42 0 0 0 2.53 1.48 28.47 28.47 0 0 1 4.57 3.16 3.39 3.39 0 0 1 .61 1.76l1 .87A39.46 39.46 0 0 0 44.1-3.07l-1.28.37a4.23 4.23 0 0 1-1.31 1.32 28.48 28.48 0 0 1-5.47.9 25.52 25.52 0 0 0-2.93.23l-.8.2h-.1a3.06 3.06 0 0 0-1.773 5.184 3.06 3.06 0 0 0 3.133.756h.06l.83-.1a25.49 25.49 0 0 0 2.74-1 28.51 28.51 0 0 1 5.32-1.56 3.37 3.37 0 0 1 1.75.62l1.33-.23a39.69 39.69 0 0 0 17.59 22l-.56 1.17a3 3 0 0 1 .27 1.72 29.8 29.8 0 0 1-2.76 5 25.55 25.55 0 0 0-1.64 2.44l-.4.82a3.06 3.06 0 0 0 2.978 4.586 3.06 3.06 0 0 0 2.532-1.976l.38-.78a25.45 25.45 0 0 0 .88-2.8c.8-2 1.25-4.15 2.36-5.48a2.47 2.47 0 0 1 1.31-.64l.7-1.25a39.47 39.47 0 0 0 28.15.07l.6 1.17a2.41 2.41 0 0 1 1.56.94 28.46 28.46 0 0 1 2.09 5.13 25.51 25.51 0 0 0 .89 2.8l.38.78a3.06 3.06 0 0 0 5.435.601 3.06 3.06 0 0 0 .075-3.211l-.4-.82a25.43 25.43 0 0 0-1.64-2.43 28.5 28.5 0 0 1-2.7-4.84 2.39 2.39 0 0 1 .31-1.83 10.48 10.48 0 0 1-.51-1.23A39.69 39.69 0 0 0 121 3.48l1.3.23a2.41 2.41 0 0 1 1.71-.63 28.51 28.51 0 0 1 5.32 1.56 25.49 25.49 0 0 0 2.74 1.06c.22.06.54.1.8.17h.06a3.06 3.06 0 0 0 3.852-3.897A3.06 3.06 0 0 0 134.28-.07l-.9-.2a25.52 25.52 0 0 0-2.93-.23 28.47 28.47 0 0 1-5.47-.9 3.42 3.42 0 0 1-1.32-1.32l-1.23-.36a39.62 39.62 0 0 0-6.35-27.45l1.08-1a2.41 2.41 0 0 1 .57-1.73 28.47 28.47 0 0 1 4.54-3.19 25.5 25.5 0 0 0 2.53-1.48l.67-.54a3.07 3.07 0 0 0-.61-5.505 3.07 3.07 0 0 0-3.19.735l-.68.54a25.52 25.52 0 0 0-2 2.13 28.56 28.56 0 0 1-4 3.77 3.4 3.4 0 0 1-1.85.2l-1.16.83a40 40 0 0 0-25.35-12.23c0-.4-.06-1.14-.07-1.36a2.41 2.41 0 0 1-1-1.52 28.54 28.54 0 0 1 .35-5.53 25.44 25.44 0 0 0 .42-2.9v-.87a3.23 3.23 0 0 0-3-3.39zm-3.82 23.66l-.9 16h-.07a2.69 2.69 0 0 1-4.27 2.06l-13.12-9.3a31.42 31.42 0 0 1 15.13-8.24 32.14 32.14 0 0 1 3.24-.52zm7.64 0a31.68 31.68 0 0 1 18.27 8.81l-13 9.24A2.69 2.69 0 0 1 88-23.95zM56.32-25.15l12 10.7v.07a2.69 2.69 0 0 1-1.06 4.62v.05l-15.4 4.43a31.41 31.41 0 0 1 4.46-19.88zm53.83 0a32 32 0 0 1 4.59 19.82L99.32-9.77v-.06a2.69 2.69 0 0 1-1.06-4.62l11.9-10.66zM80.82-13.6h4.9l3 3.8-1.1 4.76-4.4 2.12-4.42-2.12-1.04-4.77zm15.73 13a2.68 2.68 0 0 1 .62 0l15.88 2.68a31.45 31.45 0 0 1-12.71 16L94.2 3.2a2.7 2.7 0 0 1 2.33-3.75zm-26.67.07a2.69 2.69 0 0 1 2.43 3.75v.06L66.2 18A31.58 31.58 0 0 1 53.58 2.18L69.32-.5a2.72 2.72 0 0 1 .53 0zm13.3 6.46a2.71 2.71 0 0 1 2.46 1.41h.06l7.76 14a32.17 32.17 0 0 1-3.1.87 31.54 31.54 0 0 1-17.21-.89l7.74-14a2.69 2.69 0 0 1 2.29-1.35z"
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth=".25"
                />
                <path d="M188.52-8.26l2.95-3.22q1.52-1.68 2.95-3.32l2.7-3.12q1.26-1.48 2.17-2.58h11.48q-3.44 3.95-6.7 7.53-3.27 3.58-7.16 7.4a44.54 44.54 0 0 1 4 4.19q2.07 2.43 4 5 1.93 2.57 3.56 5.2 1.62 2.6 2.72 4.74h-11.1q-1-1.7-2.36-3.74-1.36-2.05-2.8-4.02-1.5-2-3.14-3.93a26.37 26.37 0 0 0-3.27-3.18v14.94h-9.66v-48.77l9.66-1.56v28.45zm56.3 20.68a53.66 53.66 0 0 1-6.35 1.33 52.21 52.21 0 0 1-8.16.62 19.39 19.39 0 0 1-7.23-1.17 11 11 0 0 1-4.57-3.27 12.75 12.75 0 0 1-2.4-5 27 27 0 0 1-.71-6.42v-19h9.66v17.8q0 4.67 1.23 6.74 1.23 2.07 4.6 2.07 1 0 2.2-.1 1.2-.1 2.07-.23v-26.3h9.66zM285.6-3.46a21.55 21.55 0 0 1-1.2 7.39 15.61 15.61 0 0 1-3.47 5.64 15.24 15.24 0 0 1-5.57 3.6 20.93 20.93 0 0 1-7.52 1.26q-1.75 0-3.66-.16-1.9-.16-3.76-.42-1.85-.26-3.53-.62-1.68-.36-3-.75v-47.63l9.66-1.56v17a18.12 18.12 0 0 1 3.37-1.1 17.31 17.31 0 0 1 3.76-.39 15.39 15.39 0 0 1 6.42 1.26 12.58 12.58 0 0 1 4.67 3.6 16.16 16.16 0 0 1 2.85 5.61 25.56 25.56 0 0 1 .98 7.27zm-9.85-.26q0-9.33-6.87-9.33a11.4 11.4 0 0 0-2.95.39 8.39 8.39 0 0 0-2.37 1V5.87q.7.13 1.8.23 1.1.1 2.4.1a6.94 6.94 0 0 0 6-2.72 11.83 11.83 0 0 0 1.98-7.2zm15.67.52a20.83 20.83 0 0 1 1.39-7.94 17 17 0 0 1 3.66-5.67 15.22 15.22 0 0 1 5.22-3.39 16.33 16.33 0 0 1 6.06-1.17q7.26 0 11.47 4.44 4.2 4.44 4.2 13.06 0 .84-.06 1.85-.06 1-.13 1.78h-21.9a6.41 6.41 0 0 0 2.79 4.73 11.2 11.2 0 0 0 6.61 1.75 27.9 27.9 0 0 0 5.22-.49 19.65 19.65 0 0 0 4.18-1.2l1.3 7.84a13.37 13.37 0 0 1-2.07.78 27.23 27.23 0 0 1-2.88.68q-1.6.3-3.4.5a34.08 34.08 0 0 1-3.63.19 21.48 21.48 0 0 1-8-1.36 15.58 15.58 0 0 1-5.64-3.73 14.78 14.78 0 0 1-3.3-5.61 22.2 22.2 0 0 1-1.1-7.03zm22.68-3.7a10 10 0 0 0-.42-2.4 6 6 0 0 0-1.1-2.07 5.88 5.88 0 0 0-1.88-1.49 6.13 6.13 0 0 0-2.82-.58 6.49 6.49 0 0 0-2.79.55 5.77 5.77 0 0 0-1.94 1.46 6.53 6.53 0 0 0-1.2 2.11 13.8 13.8 0 0 0-.62 2.43h12.77zm37.32-5.05q-1.3-.32-3-.68a18.87 18.87 0 0 0-3.76-.36 17.53 17.53 0 0 0-2.17.16 12.8 12.8 0 0 0-1.91.36v26h-9.66V-18.7a58.13 58.13 0 0 1 6.08-1.7 35.3 35.3 0 0 1 7.87-.81q.78 0 1.88.1 1.1.1 2.2.26 1.1.16 2.2.4a10.45 10.45 0 0 1 1.88.55zm6.8-7.38a54 54 0 0 1 6.35-1.33 52.25 52.25 0 0 1 8.17-.62 19.9 19.9 0 0 1 7.25 1.14 10.87 10.87 0 0 1 4.57 3.21 12.52 12.52 0 0 1 2.4 4.92 26.24 26.24 0 0 1 .71 6.35V13.6H378V-4.5q0-4.67-1.23-6.6-1.23-1.94-4.6-1.94-1 0-2.2.1-1.2.1-2.07.23v26.3h-9.66v-32.92zM394.77-3.2a20.84 20.84 0 0 1 1.39-7.94 17 17 0 0 1 3.66-5.67A15.23 15.23 0 0 1 405-20.2a16.34 16.34 0 0 1 6.06-1.17q7.26 0 11.47 4.44 4.2 4.44 4.2 13.06 0 .84-.07 1.85-.07 1-.13 1.78h-21.9a6.41 6.41 0 0 0 2.79 4.73 11.2 11.2 0 0 0 6.61 1.75 27.91 27.91 0 0 0 5.22-.49 19.66 19.66 0 0 0 4.18-1.2l1.3 7.84a13.38 13.38 0 0 1-2.07.78 27.22 27.22 0 0 1-2.88.68q-1.6.3-3.4.5a34.08 34.08 0 0 1-3.63.19 21.48 21.48 0 0 1-8-1.36 15.58 15.58 0 0 1-5.64-3.73 14.78 14.78 0 0 1-3.28-5.64 22.21 22.21 0 0 1-1.07-7zm22.68-3.7a10 10 0 0 0-.42-2.4 6 6 0 0 0-1.1-2.07 5.88 5.88 0 0 0-1.88-1.49 6.13 6.13 0 0 0-2.82-.58 6.48 6.48 0 0 0-2.79.55 5.77 5.77 0 0 0-1.94 1.46 6.52 6.52 0 0 0-1.2 2.11 13.75 13.75 0 0 0-.62 2.43h12.77zM433.9-29l9.66-1.56v10h11.6v8h-11.6v12a9.54 9.54 0 0 0 1.07 4.86q1.07 1.8 4.3 1.8a18.46 18.46 0 0 0 3.21-.29 16.5 16.5 0 0 0 3-.81l1.36 7.52a27.34 27.34 0 0 1-3.89 1.23 22.68 22.68 0 0 1-5.25.52 17.28 17.28 0 0 1-6.54-1.07 10.26 10.26 0 0 1-4.15-3 11.08 11.08 0 0 1-2.17-4.63 27.33 27.33 0 0 1-.62-6V-29zm26.4 25.8a20.84 20.84 0 0 1 1.39-7.94 17 17 0 0 1 3.66-5.67 15.23 15.23 0 0 1 5.22-3.39 16.34 16.34 0 0 1 6.06-1.17q7.26 0 11.47 4.44 4.2 4.44 4.2 13.03 0 .84-.07 1.85-.07 1-.13 1.78h-21.9a6.41 6.41 0 0 0 2.8 4.73 11.2 11.2 0 0 0 6.61 1.75 27.91 27.91 0 0 0 5.22-.49 19.66 19.66 0 0 0 4.18-1.2l1.3 7.84a13.38 13.38 0 0 1-2.07.78 27.22 27.22 0 0 1-2.88.68q-1.6.3-3.4.5a34.08 34.08 0 0 1-3.63.19 21.48 21.48 0 0 1-8-1.36 15.58 15.58 0 0 1-5.64-3.73 14.78 14.78 0 0 1-3.34-5.61 22.21 22.21 0 0 1-1.06-7zM483-6.9a10 10 0 0 0-.42-2.4 6 6 0 0 0-1.1-2.07 5.88 5.88 0 0 0-1.88-1.49 6.13 6.13 0 0 0-2.82-.58 6.48 6.48 0 0 0-2.79.55 5.77 5.77 0 0 0-1.99 1.45 6.52 6.52 0 0 0-1.2 2.11 13.75 13.75 0 0 0-.62 2.43zm26.53 13.55a9.63 9.63 0 0 0 3.76-.52 2 2 0 0 0 1.1-2 2.46 2.46 0 0 0-1.43-2 27.15 27.15 0 0 0-4.34-2 44.1 44.1 0 0 1-4.12-1.75 12.09 12.09 0 0 1-3.14-2.17 8.77 8.77 0 0 1-2-3 11.14 11.14 0 0 1-.71-4.21 9.11 9.11 0 0 1 3.56-7.58q3.56-2.8 9.78-2.8a31.44 31.44 0 0 1 6 .55 27.84 27.84 0 0 1 4.54 1.2l-1.68 7.52a35.56 35.56 0 0 0-3.66-1 19.94 19.94 0 0 0-4.44-.45q-4.54 0-4.54 2.53a2.61 2.61 0 0 0 .19 1 2.21 2.21 0 0 0 .78.87 10.91 10.91 0 0 0 1.59.91q1 .5 2.56 1.08a39.64 39.64 0 0 1 5.25 2.32 12.55 12.55 0 0 1 3.27 2.47 7.64 7.64 0 0 1 1.68 2.94 13.05 13.05 0 0 1 .49 3.75 8.64 8.64 0 0 1-3.79 7.63q-3.8 2.58-10.72 2.6a30.82 30.82 0 0 1-7.55-.78 30.5 30.5 0 0 1-4.18-1.3l1.62-7.84a31.57 31.57 0 0 0 5.05 1.52 24.54 24.54 0 0 0 5.08.51z" />
              </g>
            </svg>
          </div>

          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <svg
              className="h-12 text-gray-500 fill-current dark:text-white"
              width="120"
              height="60"
              viewBox="0 0 256 215"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M38.617 173.984v-16.362c0-2.15 1.344-3.877 3.57-3.877h.616c2.225 0 3.563 1.729 3.563 3.877v34.447c0 8.4-4.15 15.084-11.382 19.342a21.374 21.374 0 0 1-10.945 2.985h-1.537c-8.402 0-15.077-4.153-19.342-11.38a21.314 21.314 0 0 1-2.984-10.947v-1.535c0-8.403 4.152-15.083 11.378-19.349a21.298 21.298 0 0 1 10.948-2.985h1.537c5.686 0 10.51 2.204 14.578 5.784zM7.924 191.3c0 6.068 2.941 10.63 8.258 13.54 2.15 1.176 4.484 1.808 6.937 1.808 5.956 0 10.374-2.81 13.421-7.857 1.417-2.348 2.077-4.917 2.077-7.648 0-5.26-2.49-9.365-6.729-12.414-2.57-1.848-5.463-2.775-8.618-2.775-6.492 0-11.164 3.28-13.968 9.106-.946 1.97-1.378 4.061-1.378 6.24zm65.324-23.1h1.074c8.978 0 15.806 4.355 20.133 12.192 1.73 3.135 2.656 6.557 2.656 10.142v1.535c0 8.4-4.142 15.093-11.385 19.343-3.353 1.967-7.057 2.984-10.943 2.984h-1.535c-8.402 0-15.079-4.153-19.342-11.38a21.316 21.316 0 0 1-2.987-10.947v-1.535c0-8.404 4.169-15.062 11.377-19.347 3.351-1.991 7.058-2.987 10.952-2.987zm-14.58 23.1c0 5.89 2.89 10.223 7.865 13.27 2.336 1.43 4.909 2.078 7.638 2.078 5.82 0 10.122-2.951 13.116-7.863 1.428-2.342 2.074-4.915 2.074-7.642 0-5.477-2.638-9.661-7.148-12.693-2.471-1.663-5.222-2.496-8.198-2.496-6.492 0-11.164 3.28-13.967 9.106-.948 1.97-1.38 4.061-1.38 6.24zm70.656-14.727c-1.17-.548-3.36-.73-4.624-.778-6.474-.244-11.158 3.402-13.906 9.113-.949 1.97-1.382 4.055-1.382 6.235 0 6.637 3.485 11.284 9.409 14.117 2.164 1.034 4.958 1.23 7.323 1.23 2.08 0 5.02-1.274 6.866-2.151l.32-.152h1.433l.158.032c1.762.367 3.092 1.484 3.092 3.38v.767c0 4.718-8.622 5.798-11.912 6.028-11.61.803-20.293-5.573-23.603-16.647-.575-1.923-.834-3.833-.834-5.837v-1.533c0-8.403 4.17-15.059 11.377-19.34 3.351-1.99 7.057-2.99 10.95-2.99h1.536c4.13 0 7.934 1.173 11.344 3.502l.28.194.177.292c.368.61.685 1.316.685 2.042v.767c0 1.978-1.48 3.042-3.266 3.386l-.148.026h-.458c-1.156 0-3.785-1.197-4.817-1.683zm25.134 5.247c3.01-3.014 6.03-6.022 9.085-8.986.851-.827 4.074-4.327 5.343-4.327h1.388l.158.033c1.768.367 3.092 1.486 3.092 3.386v.766c0 1.296-1.518 2.802-2.355 3.689-1.78 1.887-3.654 3.712-5.476 5.56l-9.362 9.504c4.031 4.04 8.058 8.083 12.056 12.154a313.304 313.304 0 0 1 3.301 3.396c.385.405.953.909 1.276 1.47.347.526.56 1.119.56 1.752v.8l-.045.185c-.435 1.768-1.557 3.194-3.516 3.194h-.617c-1.282 0-2.73-1.45-3.608-2.279-1.81-1.706-3.557-3.5-5.331-5.243l-5.949-5.84v9.334c0 2.15-1.346 3.878-3.569 3.878h-.61c-2.226 0-3.57-1.728-3.57-3.878v-52.596c0-2.15 1.345-3.87 3.57-3.87h.61c2.223 0 3.569 1.72 3.569 3.87v24.048zm96.577-13.313h.77c2.324 0 3.875 1.566 3.875 3.877 0 3.208-3.067 4.029-5.72 4.029-3.48 0-6.803 2.107-9.202 4.47-2.991 2.949-4.3 6.726-4.3 10.878v18.759c0 2.15-1.343 3.876-3.57 3.876h-.612c-2.227 0-3.569-1.725-3.569-3.876v-19.836c0-7.617 3.708-13.835 9.89-18.196 3.691-2.605 7.919-3.98 12.438-3.98zm-55.074 37.176c2.82.985 6.035.844 8.928.34 1.48-.629 5.264-2.28 6.656-2.038l.217.037.2.098c.85.412 1.661.995 2.095 1.86 1.014 2.027.527 4.065-1.465 5.216l-.663.383c-7.35 4.242-15.168 3.654-22.495-.308-3.503-1.894-6.183-4.705-8.16-8.132l-.462-.801c-4.719-8.172-4.082-16.768 1.24-24.539 1.837-2.686 4.238-4.761 7.045-6.384l1.062-.613c6.922-3.996 14.341-3.722 21.45-.215 3.823 1.886 6.92 4.697 9.054 8.394l.384.666c1.55 2.686-.458 5.026-2.531 6.626-2.406 1.856-4.835 4.09-7.141 6.08-5.142 4.439-10.276 8.888-15.414 13.33zm-6.655-4.674c5.75-4.93 11.502-9.865 17.237-14.816 1.96-1.69 4.109-3.444 6.053-5.221-1.56-1.966-4.166-3.383-6.38-4.228-4.47-1.703-8.877-1.131-12.976 1.235-5.365 3.098-7.65 8.031-7.45 14.17.08 2.418.73 4.748 2.013 6.805.452.725.957 1.406 1.503 2.055zM147.488 45.732h22.866v23.375h11.561c5.34 0 10.831-.951 15.887-2.664 2.485-.843 5.273-2.015 7.724-3.49-3.228-4.214-4.876-9.535-5.36-14.78-.66-7.135.78-16.421 5.608-22.005l2.404-2.78 2.864 2.303c7.211 5.793 13.276 13.889 14.345 23.118 8.683-2.554 18.878-1.95 26.531 2.467l3.14 1.812-1.652 3.226C246.933 68.946 233.4 72.86 220.17 72.167c-19.797 49.309-62.898 72.653-115.157 72.653-27 0-51.77-10.093-65.876-34.047l-.231-.39-2.055-4.182c-4.768-10.544-6.352-22.095-5.278-33.637l.323-3.457H51.45V45.732h22.865V22.866h45.733V0h27.44v45.732"
                  fill="#364548"
                />
                <path
                  d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H35.37c-1.17 12.567 1.036 24.14 6.075 34.045l1.667 3.05a56.536 56.536 0 0 0 3.455 5.184c6.025.387 11.58.52 16.662.408h.002c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.078 2.323-16.806 2.738.4.007-.416.06-.418.06-.229.015-.517.048-.747.06-2.648.149-5.506.18-8.428.18-3.196 0-6.343-.06-9.862-.24l-.09.06c12.21 13.724 31.302 21.955 55.234 21.955 50.648 0 93.608-22.452 112.632-72.857 13.496 1.385 26.467-2.057 32.367-13.575-9.398-5.423-21.484-3.694-28.443-.196"
                  fill="#22A0C8"
                />
                <path
                  d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H44.048c-.598 19.246 6.544 33.855 19.18 42.687h.003c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.526 2.443-17.254 2.858-.002 0-.163-.155-.165-.155 17.237 8.842 42.23 8.81 70.885-2.197 32.13-12.344 62.029-35.86 82.89-62.757-.314.142-.62.287-.917.436"
                  fill="#37B1D9"
                />
                <path
                  d="M35.645 88.186c.91 6.732 2.88 13.035 5.8 18.776l1.667 3.05a56.432 56.432 0 0 0 3.455 5.184c6.026.387 11.581.52 16.664.408 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.496 2.383-17.224 2.799-.231.014-.634.017-.867.03-2.646.148-5.475.239-8.398.239-3.195 0-6.463-.061-9.98-.24 12.21 13.724 31.42 21.985 55.352 21.985 43.36 0 81.084-16.458 102.979-52.822H35.645"
                  fill="#1B81A5"
                />
                <path
                  d="M45.367 88.186c2.592 11.82 8.821 21.099 17.864 27.418 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.615 2.383-17.344 2.799 17.236 8.84 42.157 8.713 70.81-2.293 17.334-6.66 34.017-16.574 48.984-28.515H45.367"
                  fill="#1D91B4"
                />
                <path
                  d="M55.26 49.543h19.818v19.818H55.26V49.543zm1.651 1.652h1.564V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71H68.86V51.195zm3.002 0h1.565V67.71h-1.565V51.195zM78.126 26.677h19.819v19.817h-19.82V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.625V28.329zm3.002 0h1.626v16.514H85.72V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.002 0h1.566v16.514h-1.566V28.329z"
                  fill="#23A3C2"
                />
                <path
                  d="M78.126 49.543h19.819v19.818h-19.82V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.625V51.195zm3.002 0h1.626V67.71H85.72V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.002 0h1.566V67.71h-1.566V51.195z"
                  fill="#34BBDE"
                />
                <path
                  d="M100.993 49.543h19.818v19.818h-19.818V49.543zm1.651 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.002 0h1.628V67.71h-1.628V51.195zm3.003 0h1.564V67.71h-1.564V51.195z"
                  fill="#23A3C2"
                />
                <path
                  d="M100.993 26.677h19.818v19.817h-19.818V26.677zm1.651 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.002 0h1.628v16.514h-1.628V28.329zm3.003 0h1.564v16.514h-1.564V28.329zM123.859 49.543h19.818v19.818h-19.818V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.002 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.564V67.71h-1.564V51.195z"
                  fill="#34BBDE"
                />
                <path
                  d="M123.859 26.677h19.818v19.817h-19.818V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.002 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.564v16.514h-1.564V28.329z"
                  fill="#23A3C2"
                />
                <path
                  d="M123.859 3.81h19.818V23.63h-19.818V3.81zm1.652 1.651h1.563v16.516h-1.563V5.46zm2.94 0h1.626v16.516h-1.626V5.46zm3.002 0h1.626v16.516h-1.626V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.564v16.516h-1.564V5.46z"
                  fill="#34BBDE"
                />
                <path
                  d="M146.725 49.543h19.818v19.818h-19.818V49.543zm1.65 1.652h1.565V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.004 0h1.627V67.71h-1.627V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.002 0h1.564V67.71h-1.564V51.195z"
                  fill="#23A3C2"
                />
                <path
                  d="M96.704 101.492a5.468 5.468 0 1 1-.002 10.935 5.468 5.468 0 0 1 .002-10.935"
                  fill="#D3ECEC"
                />
                <path
                  d="M96.704 103.043c.5 0 .977.094 1.417.265a1.598 1.598 0 0 0 .798 2.98c.605 0 1.13-.335 1.402-.831a3.915 3.915 0 1 1-3.617-2.414M0 90.162h254.327c-5.537-1.404-17.52-3.302-15.544-10.56-10.07 11.652-34.353 8.175-40.482 2.43-6.824 9.898-46.554 6.135-49.325-1.576-8.556 10.041-35.067 10.041-43.623 0-2.773 7.711-42.502 11.474-49.327 1.575-6.128 5.746-30.41 9.223-40.48-2.428C17.522 86.86 5.539 88.758 0 90.163"
                  fill="#364548"
                />
                <path
                  d="M111.237 140.89c-13.54-6.425-20.971-15.16-25.106-24.694-5.03 1.435-11.075 2.353-18.1 2.747-2.646.148-5.43.224-8.35.224-3.368 0-6.917-.1-10.643-.297 12.417 12.41 27.692 21.964 55.976 22.138 2.088 0 4.16-.04 6.223-.118"
                  fill="#BDD9D7"
                />
                <path
                  d="M91.16 124.994c-1.873-2.543-3.69-5.739-5.026-8.8-5.03 1.437-11.077 2.355-18.103 2.75 4.826 2.619 11.727 5.046 23.13 6.05"
                  fill="#D3ECEC"
                />
              </g>
            </svg>
          </div>

          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <svg
              className="h-12 text-gray-500 fill-current dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <path
                fill="#495057"
                d="M76.397 55.676c-2.737 0-4.775 1.344-4.775 4.579 0 2.437 1.343 4.129 4.628 4.129 2.784 0 4.676-1.641 4.676-4.23 0-2.934-1.693-4.478-4.529-4.478zm-5.471 22.84c-.648.795-1.294 1.64-1.294 2.637 0 1.989 2.536 2.587 6.021 2.587 2.885 0 6.816-.202 6.816-2.885 0-1.595-1.892-1.693-4.281-1.843l-7.262-.496zm14.725-22.69c.895 1.145 1.842 2.737 1.842 5.026 0 5.522-4.329 8.756-10.597 8.756-1.594 0-3.037-.198-3.932-.447l-1.642 2.637 4.875.297c8.608.549 13.682.798 13.682 7.413 0 5.723-5.024 8.955-13.682 8.955-9.006 0-12.438-2.289-12.438-6.218 0-2.24.996-3.431 2.737-5.076-1.643-.694-2.189-1.937-2.189-3.281 0-1.095.547-2.09 1.443-3.036.896-.944 1.891-1.891 3.084-2.985-2.438-1.194-4.278-3.781-4.278-7.464 0-5.721 3.781-9.65 11.393-9.65 2.14 0 3.435.197 4.578.498h9.703v4.228l-4.579.347zM98.983 46.786c-2.837 0-4.479-1.643-4.479-4.48 0-2.833 1.642-4.377 4.479-4.377 2.886 0 4.527 1.543 4.527 4.377.001 2.837-1.641 4.48-4.527 4.48zm-6.42 29.9v-3.929l2.539-.348c.696-.1.795-.249.795-.997v-14.627c0-.546-.148-.896-.647-1.044l-2.687-.946.547-4.028h10.301v20.646c0 .798.048.896.796.997l2.538.348v3.929h-14.182v-.001zM126.42 74.756c-2.141 1.043-5.274 1.99-8.112 1.99-5.92 0-8.158-2.386-8.158-8.011v-13.035c0-.297 0-.497-.399-.497h-3.482v-4.428c4.38-.499 6.12-2.688 6.667-8.111h4.728v7.067c0 .347 0 .498.398.498h7.015v4.975h-7.413v11.89c0 2.935.697 4.079 3.383 4.079 1.395 0 2.836-.347 4.03-.795l1.343 4.378z"
              />
              <path
                fill="#F34F29"
                d="M52.7 61.7l-22.749-22.748c-1.309-1.31-3.434-1.31-4.744 0l-4.724 4.724 5.991 5.992c1.394-.47 2.99-.155 4.1.956 1.116 1.117 1.429 2.727.947 4.125l5.775 5.775c1.396-.481 3.009-.17 4.125.947 1.56 1.559 1.56 4.086 0 5.646-1.561 1.56-4.087 1.56-5.647 0-1.173-1.174-1.463-2.897-.869-4.342l-5.386-5.386-.001 14.174c.381.188.739.438 1.056.754 1.56 1.559 1.56 4.085 0 5.647-1.56 1.559-4.088 1.559-5.646 0-1.56-1.562-1.56-4.088 0-5.647.386-.385.831-.676 1.307-.871v-14.305c-.476-.194-.921-.484-1.307-.871-1.182-1.181-1.466-2.914-.86-4.365l-5.906-5.908-15.599 15.598c-1.311 1.311-1.311 3.436 0 4.747l22.749 22.748c1.31 1.31 3.434 1.31 4.746 0l22.642-22.644c1.311-1.31 1.311-3.436 0-4.746z"
              />
              <path fill="none" d="M1.58 37.928h124.84v52.143h-124.84z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
