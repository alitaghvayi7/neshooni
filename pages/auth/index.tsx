import Image from "next/image";
import Logo from "@/assets/images/mainpage/logo.png";
import GoogleLogo from "@/assets/images/auth/google-logo.png";
import styles from "@/styles/Auth/Auth.module.css";
import { useState, useRef, useEffect, Fragment } from "react";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[…nextauth]";


export default function Auth({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const maxLength = 6;
    const [change, setChange] = useState(false)
    const [code, setCode] = useState("");
    const [step, setStep] = useState(1)
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onChange = (value: string) => {

        if (value !== "" && code.length + 1 <= maxLength) {
            // setCodeLength(codeLength + 1 > maxLength ? 6 : codeLength + 1);
            setCode(code + value)
        } else {
            // setCodeLength(codeLength - 1 <= 0 ? 1 : codeLength - 1);
            setCode(code.slice(0, code.length - 1))
        }
    }


    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.stopPropagation();
        event.preventDefault();
        // onChange()
        const currentCode = event.nativeEvent.which || event.nativeEvent.keyCode || event.nativeEvent.code;

        let currentKey = event.key;
        if (!currentKey) {
            currentKey = String.fromCharCode(Number(currentCode));
        }

        if (currentKey === 'Backspace') {
            // setCodeLength(codeLength - 1 <= 0 ? 1 : codeLength - 1);
            setCode(code.slice(0, code.length - 1))
        } else {
            if (isNaN(Number(currentKey))) {
                return
            }
            if (code.length + 1 > maxLength) {
                return;
            }
            onChange(currentKey)
        }

    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current?.focus()
        }
    }, [code.length, step]);


    return (
        <main
            className={`w-screen h-screen`}
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    setStep(2)
                }}
                className={`w-full h-full bg-[#FAFBFF] bg-opacity-40 absolute z-[2] inset-0 flex justify-center items-center isolate`}
            >
                <div
                    className={`bg-white rounded-[32px] w-[342px] h-fit flex flex-col items-center py-8 px-6`}>

                    <div>
                        <Image
                            src={Logo}
                            alt={"qom-neshan-logo"}
                            className={`w-8 h-8 object-cover`}
                        />
                    </div>

                    <h1 className={`text-[16px] text-write-01 font-bold self-start mt-8`}>ورود / ثبت نام</h1>

                    {
                        step === 1 && (
                            <Fragment>
                                {Object.values(providers).map((provider) => (
                                    <button
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                        type={'button'}
                                        className={`w-full h-[56px] rounded-[16px] border border-gray-03 flex items-center justify-center gap-2 mt-4`}>
                                        <Image
                                            src={GoogleLogo}
                                            alt={"google-logo"}
                                            className={`w-6 h-6 object-cover`}
                                        />
                                        <span className={`text-[14px] text-write-main`}>ورود با {provider.name}</span>
                                    </button>
                                ))}


                                <div className={`w-full flex items-center justify-between mt-6`}>
                                    <span className={`w-[40%] h-[1px] bg-gray-01`}></span>
                                    <span className={`text-[14px] text-write-main`}>یا</span>
                                    <span className={`w-[40%] h-[1px] bg-gray-01`}></span>
                                </div>

                                <span className={`w-full self-start text-[16px] text-write-main mt-6`}>
                                    سلام!
                                    <br />
                                    لطفا شماره موبایل یا ایمیل خود را وارد کنید.
                                </span>

                                <input
                                    type={'text'}
                                    placeholder={'شماره موبایل'}
                                    className={`w-full border border-gray-01 rounded-[16px] h-[40px] text-write-main text-[12px] placeholder:text-write-main placeholder:text-[12px] py-3 px-4 mt-6 outline-black`}
                                />
                            </Fragment>
                        )
                    }


                    {
                        step === 2 && (
                            <Fragment>
                                <span className={`w-full max-w-[262px] self-start text-[16px] text-write-main mt-6`}>
                                    لطفا کد ارسال شده به شماره 0912222222
                                    را وارد کنید.
                                </span>

                                <div
                                    dir={'ltr'}
                                    onClick={() => inputRef.current?.focus()}
                                    className={`w-full h-[40px] flex items-center gap-2 rounded-[16px] border border-gray-01 mt-8 py-2 px-4`}>
                                    <input
                                        ref={(r) => {
                                            if (code === "") {
                                                inputRef.current = r
                                            }
                                            if (code.length === 1) {
                                                inputRef.current = r
                                            }
                                        }}
                                        onKeyDown={onKeyDown}
                                        //onChange={onChange}
                                        //onBlur={onBlur}
                                        value={code[0] ?? ''}
                                        type={'text'}
                                        minLength={1}
                                        maxLength={1}
                                        className={`w-[15%] h-full bg-transparent border-b border-gray-01 text-write-main text-[12px] placeholder:text-gray-01 outline-none flex items-center justify-center text-center focus:border-transparent transition`}
                                    />
                                    <input
                                        ref={(r) => {
                                            if (code.length === 2) {
                                                inputRef.current = r
                                            }
                                        }}
                                        //onChange={onChange}
                                        onKeyDown={onKeyDown}
                                        //onBlur={onBlur}
                                        value={code[1] ?? ''}
                                        type={'text'}
                                        minLength={1}
                                        maxLength={1}
                                        className={`w-[15%] h-full bg-transparent border-b border-gray-01 text-write-main text-[12px] placeholder:text-gray-01 outline-none flex items-center justify-center text-center focus:border-transparent transition`}
                                    />
                                    <input
                                        ref={(r) => {
                                            if (code.length === 3) {
                                                inputRef.current = r
                                            }
                                        }}
                                        //onChange={onChange}
                                        onKeyDown={onKeyDown}
                                        //onBlur={onBlur}
                                        value={code[2] ?? ''}
                                        type={'text'}
                                        minLength={1}
                                        maxLength={1}
                                        className={`w-[15%] h-full bg-transparent border-b border-gray-01 text-write-main text-[12px] placeholder:text-gray-01 outline-none flex items-center justify-center text-center focus:border-transparent transition`}
                                    />
                                    <input
                                        ref={(r) => {
                                            if (code.length === 4) {
                                                inputRef.current = r
                                            }
                                        }}
                                        //onChange={onChange}
                                        onKeyDown={onKeyDown}
                                        //onBlur={onBlur}
                                        value={code[3] ?? ''}
                                        type={'text'}
                                        minLength={1}
                                        maxLength={1}
                                        className={`w-[15%] h-full bg-transparent border-b border-gray-01 text-write-main text-[12px] placeholder:text-gray-01 outline-none flex items-center justify-center text-center focus:border-transparent transition`}
                                    />
                                    <input
                                        ref={(r) => {
                                            if (code.length === 5) {
                                                inputRef.current = r
                                            }
                                        }}
                                        //onChange={onChange}
                                        onKeyDown={onKeyDown}
                                        //onBlur={onBlur}
                                        value={code[4] ?? ''}
                                        type={'text'}
                                        minLength={1}
                                        maxLength={1}
                                        className={`w-[15%] h-full bg-transparent border-b border-gray-01 text-write-main text-[12px] placeholder:text-gray-01 outline-none flex items-center justify-center text-center focus:border-transparent transition`}
                                    />
                                    <input
                                        ref={(r) => {
                                            if (code.length === 6) {
                                                inputRef.current = r
                                            }
                                        }}
                                        //onChange={onChange}
                                        onKeyDown={onKeyDown}
                                        //onBlur={onBlur}
                                        value={code[5] ?? ''}
                                        type={'text'}
                                        minLength={1}
                                        maxLength={1}
                                        className={`w-[15%] h-full bg-transparent border-b border-gray-01 text-write-main text-[12px] placeholder:text-gray-01 outline-none flex items-center justify-center text-center focus:border-transparent transition`}
                                    />

                                </div>

                                <button type={'button'} className={`w-full text-[14px] text-blue-03 mt-4`}>
                                    ویرایش شماره
                                </button>

                                <div className={`w-full flex items-center justify-between mt-2`}>
                                    <button type={'button'} className={`text-[12px] text-gray-03`}>ارسال دوباره کد تایید
                                    </button>
                                    <span className={`text-[12px] text-gray-03`}>02:00</span>
                                </div>
                            </Fragment>
                        )
                    }

                    <button
                        type={'submit'}
                        className={`w-full bg-yellow-main rounded-[16px] h-[40px] text-write-main text-[14px] flex items-center justify-center mt-8`}>
                        ارسال کد
                    </button>

                </div>
            </form>

            <section
                className={`w-full h-full flex flex-col gap-4 justify-center absolute z-[1] left-0 top-0 bottom-0 ${styles["hero-image"]}`}
            ></section>
        </main>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);

    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    if (session) {
        return { redirect: { destination: "/" } };
    }
    const providers = await getProviders();

    return {
        props: { providers: providers ?? [] },
    }
}
