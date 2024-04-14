"use client";
import GoogleLogo from "@/assets/images/auth/google-logo.png";
import Logo from "@/assets/images/mainpage/logo.png";
import styles from "@/styles/Auth/Auth.module.css";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

export default function Auth() {
  const maxLength = 6;
  const [change, setChange] = useState(false);
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChange = (value: string) => {
    if (value !== "" && code.length + 1 <= maxLength) {
      // setCodeLength(codeLength + 1 > maxLength ? 6 : codeLength + 1);
      setCode(code + value);
    } else {
      // setCodeLength(codeLength - 1 <= 0 ? 1 : codeLength - 1);
      setCode(code.slice(0, code.length - 1));
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    // onChange()
    const currentCode = event.nativeEvent.which || event.nativeEvent.keyCode || event.nativeEvent.code;

    let currentKey = event.key;
    if (!currentKey) {
      currentKey = String.fromCharCode(Number(currentCode));
    }

    if (currentKey === "Backspace") {
      // setCodeLength(codeLength - 1 <= 0 ? 1 : codeLength - 1);
      setCode(code.slice(0, code.length - 1));
    } else {
      if (isNaN(Number(currentKey))) {
        return;
      }
      if (code.length + 1 > maxLength) {
        return;
      }
      onChange(currentKey);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }, [code.length, step]);

  return (
    <main className={`h-screen w-screen`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStep(2);
        }}
        className={`absolute inset-0 isolate z-[2] flex h-full w-full items-center justify-center bg-[#FAFBFF] bg-opacity-40`}
      >
        <div className={`flex h-fit w-[342px] flex-col items-center rounded-[32px] bg-white px-6 py-8`}>
          <div>
            <Image src={Logo} alt={"qom-neshan-logo"} className={`h-8 w-8 object-cover`} />
          </div>

          <h1 className={`text-write-01 mt-8 self-start text-[16px] font-bold`}>ورود / ثبت نام</h1>

          {step === 1 && (
            <Fragment>
              {/* {Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  type={"button"}
                  className={`mt-4 flex h-[56px] w-full items-center justify-center gap-2 rounded-[16px] border border-gray-03`}
                >
                  <Image src={GoogleLogo} alt={"google-logo"} className={`h-6 w-6 object-cover`} />
                  <span className={`text-[14px] text-write-main`}>ورود با {provider.name}</span>
                </button>
              ))} */}

              {/* <div className={`mt-6 flex w-full items-center justify-between`}>
                <span className={`h-[1px] w-[40%] bg-gray-01`}></span>
                <span className={`text-[14px] text-write-main`}>یا</span>
                <span className={`h-[1px] w-[40%] bg-gray-01`}></span>
              </div> */}

              <span className={`mt-6 w-full self-start text-[16px] text-write-main`}>
                سلام!
                <br />
                لطفا شماره موبایل یا ایمیل خود را وارد کنید.
              </span>

              <input
                type={"text"}
                placeholder={"شماره موبایل"}
                className={`mt-6 h-[40px] w-full rounded-[16px] border border-gray-01 px-4 py-3 text-[12px] text-write-main outline-black placeholder:text-[12px] placeholder:text-write-main`}
              />
            </Fragment>
          )}

          {step === 2 && (
            <Fragment>
              <span className={`mt-6 w-full max-w-[262px] self-start text-[16px] text-write-main`}>
                لطفا کد ارسال شده به شماره 0912222222 را وارد کنید.
              </span>

              <div
                dir={"ltr"}
                onClick={() => inputRef.current?.focus()}
                className={`mt-8 flex h-[40px] w-full items-center gap-2 rounded-[16px] border border-gray-01 px-4 py-2`}
              >
                <input
                  ref={(r) => {
                    if (code === "") {
                      inputRef.current = r;
                    }
                    if (code.length === 1) {
                      inputRef.current = r;
                    }
                  }}
                  onKeyDown={onKeyDown}
                  //onChange={onChange}
                  //onBlur={onBlur}
                  value={code[0] ?? ""}
                  type={"text"}
                  minLength={1}
                  maxLength={1}
                  className={`flex h-full w-[15%] items-center justify-center border-b border-gray-01 bg-transparent text-center text-[12px] text-write-main outline-none transition placeholder:text-gray-01 focus:border-transparent`}
                />
                <input
                  ref={(r) => {
                    if (code.length === 2) {
                      inputRef.current = r;
                    }
                  }}
                  //onChange={onChange}
                  onKeyDown={onKeyDown}
                  //onBlur={onBlur}
                  value={code[1] ?? ""}
                  type={"text"}
                  minLength={1}
                  maxLength={1}
                  className={`flex h-full w-[15%] items-center justify-center border-b border-gray-01 bg-transparent text-center text-[12px] text-write-main outline-none transition placeholder:text-gray-01 focus:border-transparent`}
                />
                <input
                  ref={(r) => {
                    if (code.length === 3) {
                      inputRef.current = r;
                    }
                  }}
                  //onChange={onChange}
                  onKeyDown={onKeyDown}
                  //onBlur={onBlur}
                  value={code[2] ?? ""}
                  type={"text"}
                  minLength={1}
                  maxLength={1}
                  className={`flex h-full w-[15%] items-center justify-center border-b border-gray-01 bg-transparent text-center text-[12px] text-write-main outline-none transition placeholder:text-gray-01 focus:border-transparent`}
                />
                <input
                  ref={(r) => {
                    if (code.length === 4) {
                      inputRef.current = r;
                    }
                  }}
                  //onChange={onChange}
                  onKeyDown={onKeyDown}
                  //onBlur={onBlur}
                  value={code[3] ?? ""}
                  type={"text"}
                  minLength={1}
                  maxLength={1}
                  className={`flex h-full w-[15%] items-center justify-center border-b border-gray-01 bg-transparent text-center text-[12px] text-write-main outline-none transition placeholder:text-gray-01 focus:border-transparent`}
                />
                <input
                  ref={(r) => {
                    if (code.length === 5) {
                      inputRef.current = r;
                    }
                  }}
                  //onChange={onChange}
                  onKeyDown={onKeyDown}
                  //onBlur={onBlur}
                  value={code[4] ?? ""}
                  type={"text"}
                  minLength={1}
                  maxLength={1}
                  className={`flex h-full w-[15%] items-center justify-center border-b border-gray-01 bg-transparent text-center text-[12px] text-write-main outline-none transition placeholder:text-gray-01 focus:border-transparent`}
                />
                <input
                  ref={(r) => {
                    if (code.length === 6) {
                      inputRef.current = r;
                    }
                  }}
                  //onChange={onChange}
                  onKeyDown={onKeyDown}
                  //onBlur={onBlur}
                  value={code[5] ?? ""}
                  type={"text"}
                  minLength={1}
                  maxLength={1}
                  className={`flex h-full w-[15%] items-center justify-center border-b border-gray-01 bg-transparent text-center text-[12px] text-write-main outline-none transition placeholder:text-gray-01 focus:border-transparent`}
                />
              </div>

              <button type={"button"} className={`mt-4 w-full text-[14px] text-blue-03`}>
                ویرایش شماره
              </button>

              <div className={`mt-2 flex w-full items-center justify-between`}>
                <button type={"button"} className={`text-[12px] text-gray-03`}>
                  ارسال دوباره کد تایید
                </button>
                <span className={`text-[12px] text-gray-03`}>02:00</span>
              </div>
            </Fragment>
          )}

          <button
            type={"submit"}
            className={`mt-8 flex h-[40px] w-full items-center justify-center rounded-[16px] bg-yellow-main text-[14px] text-write-main`}
          >
            ارسال کد
          </button>
        </div>
      </form>

      <section
        className={`absolute bottom-0 left-0 top-0 z-[1] flex h-full w-full flex-col justify-center gap-4 ${styles["hero-image"]}`}
      ></section>
    </main>
  );
}
