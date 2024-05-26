"use client";

import { ChevronDownIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SetCordinates from "@/features/IntroductionPage/SetCordinates";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { baseURL } from "@/services/news";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  type: z.string().min(1, { message: "نوع مکان‌های دیدنی الزامی می‌باشد" }),
  title: z.string().min(1, { message: "عنوان مکان‌های دیدنی الزامی می‌باشد" }),
  description: z.string().min(1, { message: "توضیحات مکان‌های دیدنی الزامی می‌باشد" }),
  image: z.any({ required_error: "لطفاً عکس انتخاب کنید" }).refine((args: File) => {
    if (!args) {
      return false;
    } else {
      return true;
    }
  }, "لطفاً عکس محل مورد نظر را ارسال کنید"),
  phoneNumber: z.string().min(1, { message: "شماره موبایل الزامی می‌باشد" }),
  address: z.string().min(1, "لطفاً آدرس محل مورد نظر را وارد کنید"),
  lat: z.string(),
  long: z.string(),
});

export type introductionFormData = z.infer<typeof formSchema>;

const placeType = {
  گردشگری: "tourism",
  "کسب و کار": "shop",
};

const NewIntroductionForm = () => {
  const { toast } = useToast();
  const session = useSession();
  const [open, setOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState({
    url: "",
    name: "",
  });

  const formMethods = useForm<introductionFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      title: "",
      description: "",
      image: null,
      phoneNumber: "",
      address: "",
      lat: "",
      long: "",
    },
  });

  const errors = formMethods.formState.errors;

  const handleFormSubmit = formMethods.handleSubmit(async (data) => {
    try {
      const formData = new FormData();
      formData.append("type", placeType[data.type as keyof typeof placeType]);
      formData.append("suggestable_id", "");
      formData.append("user_id", `${session.data?.user.id}`);
      formData.append("content", data.description);
      formData.append("address", data.address);
      formData.append("title", data.title);
      formData.append("phone", data.phoneNumber);
      formData.append("image", data.image);
      const req = await fetch(`${baseURL}/suggestion`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.data?.user.token}`,
        },
        body: formData,
      });
      if (req.ok) {
        toast({
          title: "پیشنهاد شما با موفقیت ثبت شد",
        });
        formMethods.reset();
        setImagePreview({ url: "", name: "" });
      } else {
        toast({
          title: "خطایی رخ داده است. لطفاً بعداً تلاش کنید",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "خطایی رخ داده است. لطفاً بعداً تلاش کنید",
        variant: "destructive",
      });
    }
  });

  return (
    <FormProvider {...formMethods}>
      <div className={`w-full`}>
        <section className={`w-full bg-blue-04 bg-opacity-10 pb-14 pt-[5rem] lg:pt-[8rem]`}>
          <section
            className={`mx-auto flex w-[calc(100%-56px)] max-w-[1254px] flex-col flex-wrap gap-4 lg:w-[calc(100%-300px)] lg:gap-0`}
          >
            <p className={`w-full max-w-[1124px] text-[20px] font-[400] leading-8 text-write-04`}>
              شما می توانید مکان‌های دیدنی ، کسب و کارهای مختلف و... در این بخش به ما معرفی کنید. بعد از ارسال و معرفی
              خود، مطالب توسط ادمین بررسی میشود و در سایت منتشر می‌شود.
            </p>
            <details className={`group relative isolate mt-[72px]`} open={open}>
              <summary
                onClick={() => setOpen(true)}
                className={`flex h-[48px] w-full max-w-[539px] cursor-pointer items-center justify-between rounded-[16px] border border-gray-02 bg-white px-6 py-3 group-open:rounded-b-none group-open:rounded-t-[16px]`}
              >
                <span className={`text-[16px] font-[500] text-write-04`}>
                  {formMethods.getValues("type") ? formMethods.getValues("type") : "سوژه مورد نظر شما جزو کدوم بخشه؟"}
                </span>
                <ChevronDownIcon className={`h-6 w-6 text-[#5B5B5B] transition group-open:rotate-[180deg]`} />
              </summary>
              <ul className={`group/dropdown absolute left-0 right-0 top-[46px] w-full max-w-[538px]`}>
                <li
                  onClick={() => {
                    formMethods.setValue("type", "گردشگری");
                    formMethods.clearErrors("type");
                    setOpen(false);
                  }}
                  className={`flex w-full max-w-[539px] cursor-pointer items-center justify-between bg-white px-6 py-3 `}
                >
                  گردشگری
                </li>
                <li
                  onClick={() => {
                    formMethods.setValue("type", "کسب و کار");
                    formMethods.clearErrors("type");
                    setOpen(false);
                  }}
                  className={`flex w-full max-w-[539px] cursor-pointer items-center justify-between bg-white px-6 py-3 group-open:rounded-b-[16px]`}
                >
                  کسب و کار
                </li>
              </ul>
            </details>
            {errors.type && <span className="px-2 py-1 text-[12px] text-red-400">{errors.type.message}</span>}

            <form onSubmit={handleFormSubmit} className={`mt-6 flex w-full flex-col items-center justify-center gap-6`}>
              <div
                className={`mx-auto flex h-max w-full flex-wrap items-center justify-center gap-4 rounded-[32px] bg-transparent lg:h-[470px] lg:flex-nowrap lg:justify-between lg:gap-6 lg:border lg:border-yellow-04 lg:bg-white lg:px-[64px] lg:py-10`}
              >
                <div className={`flex h-full w-full max-w-[539px] flex-col justify-between gap-4 lg:gap-8`}>
                  {/* <input
                    type={"text"}
                    placeholder={`نوع کسب و کار`}
                    className={`h-[56px] w-full rounded-[16px] border border-gray-02 bg-white px-6 py-4 text-[16px] font-[400] text-write-main placeholder:text-gray-03`}
                  /> */}
                  <div>
                    <input
                      type={"text"}
                      placeholder={`عنوان کسب و کار  را وارد کنید`}
                      {...formMethods.register("title")}
                      className={`h-[56px] w-full rounded-[16px] border border-gray-02 bg-white px-6 py-4 text-[16px] font-[400] text-write-main outline-none placeholder:text-gray-03`}
                    />
                    {errors.title && (
                      <span className="px-2 pt-2 text-[12px] text-red-500">{errors.title?.message}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type={"text"}
                      placeholder={`شماره تماس`}
                      {...formMethods.register("phoneNumber")}
                      className={`h-[56px] w-full rounded-[16px] border border-gray-02 bg-white px-6 py-4 text-[16px] font-[400] text-write-main outline-none placeholder:text-gray-03`}
                    />
                    {errors.phoneNumber && (
                      <span className="px-2 pt-2 text-[12px] text-red-500">{errors.phoneNumber?.message}</span>
                    )}
                  </div>

                  <div className="flex-1">
                    <input
                      id={`file`}
                      className={`hidden`}
                      {...formMethods.register("image", {
                        onChange: (e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = () => {
                              formMethods.setValue("image", file);
                              setImagePreview({
                                name: file.name,
                                url: reader.result as string,
                              });
                            };
                          }
                        },
                      })}
                      type={"file"}
                      multiple={false}
                    />
                    <label
                      htmlFor={`file`}
                      className={`flex h-full w-full cursor-pointer items-center justify-between rounded-[16px] border-[3px] border-dashed border-gray-02 bg-white p-6 lg:justify-around`}
                    >
                      {imagePreview.name ? (
                        imagePreview.name
                      ) : (
                        <div className={`flex flex-col `}>
                          <span className={`text-[16px] font-[500] text-gray-03`}>افزودن عکس</span>
                          <div className={`flex items-center gap-3`}>
                            <span className={`text-[12px] font-[400] text-gray-01`}>اندازه عکسpx 500*500px </span>
                            <span className={`text-[12px] font-[400] text-gray-01`}>حجم عکس10 MB </span>
                          </div>
                        </div>
                      )}
                      {imagePreview.url.length > 0 ? (
                        <div className="relative size-20">
                          <Image src={imagePreview.url} alt="" fill />
                        </div>
                      ) : (
                        <PhotoIcon className={`h-[56px] w-[56px] self-center text-blue-06`} />
                      )}
                    </label>
                    {errors.image && (
                      <span className="px-2 pt-2 text-[12px] text-red-500">{errors.image?.message?.toString()}</span>
                    )}
                  </div>
                </div>
                <div className={`flex h-full w-full max-w-[539px] flex-col justify-between gap-6 lg:gap-6`}>
                  <div className="h-[136px] w-full flex-1 rounded-[16px] border border-gray-02 bg-white">
                    <textarea
                      placeholder={"توضیحات"}
                      {...formMethods.register("description")}
                      className={`h-full w-full resize-none rounded-[16px] p-6 text-[16px] font-[400] text-write-main placeholder:text-gray-03`}
                    ></textarea>
                    {errors.description && (
                      <span className="mmb-4 block px-2 text-[12px] text-red-500">{errors.description?.message}</span>
                    )}
                  </div>
                  <div>
                    <SetCordinates />
                    {errors.address && (
                      <span className="px-2 py-2 text-[12px] text-red-500">{errors.address?.message}</span>
                    )}
                  </div>
                </div>
              </div>
              <button
                type={"submit"}
                className={`flex w-full max-w-[444px] cursor-pointer items-center justify-center rounded-[16px] bg-yellow-main py-3 text-[16px] text-write-04`}
              >
                ارسال
              </button>
            </form>
          </section>
        </section>

        {/* <MapComponent /> */}
      </div>
    </FormProvider>
  );
};

export default NewIntroductionForm;
