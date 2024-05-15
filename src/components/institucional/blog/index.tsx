import style from "./style.module.scss";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { Post, WPResponse } from "@/components/institucional/blog/types";
import arrowLeft from "@/assets/cta/arrowLeft.svg";
import arrowRight from "@/assets/cta/arrowRigth.svg";
import Image from "next/image";
import Link from "next/link";

export function Blog() {
  const [post, setPost] = useState<Post>({
    id: 0,
    date: new Date().toDateString(),
    link: "",
    title: { rendered: "" },
    excerpt: { rendered: "" },
    _embedded: {
      "wp:featuredmedia": [{ source_url: "" }],
      "wp:term": [[{ link: "", name: "" }]],
      author: [{ link: "", name: "" }],
    },
  });
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://uxgroup.com.br/index.php")
      .then((res) => res.json() as Promise<WPResponse>)
      .then((res) => {
        setPost(res["featured"]);
        setPosts(res["posts"]);
      })
      .catch(console.error);
  }, []);

  return (
    <section className={style.container}>
      <div className="w-[92%]">
        <div className={`w-full m-0  ${style.titleBlock}`}>
          <h1 className="md:w-4/5 w-full text-black text-center ">
            Conteúdos exclusivos sobre o nosso setor.
          </h1>
          <p className="text-center w-full md:w-3/4 text-black">
            Mantenha-se atualizado com as últimas tendências e insights em
            tecnologia, logística, sustentabilidade e muito mais. Descubra como
            as inovações estão moldando o mercado de vendas digitais.
          </p>
        </div>

        <div className=" flex md:items-center items-start justify-start md:justify-center w-full h-full ">
          <div className="flex md:flex-row flex-col  md:items-center items-start justify-start w-full md:justify-between gap-4 md:overflow-y-hidden overflow-y-hidden overflow-auto p-2">
            {posts.map((p) => (
              <div
                style={{ boxShadow: "rgba(0, 0, 0, 0.05) 2px 4px 12px 0px;" }}
                className="flex md:h-[500px] flex-col md:w-[420px] w-full h-[500px]  rounded-2xl text-black bg-white border border-gray-200"
              >
                <div className="flex w-full h-[45%]">
                  <Image
                    width={100}
                    height={100}
                    quality={100}
                    className="rounded-t-lg  w-full h"
                    src={
                      p._embedded["wp:featuredmedia"][0].source_url ??
                      "https://blog.uxgroup.com.br/wp-content/plugins/anwp-post-grid-for-elementor/public/img/empty_image.jpg"
                    }
                    alt="Banner do conteúdo"
                  />
                </div>
                <div className="flex flex-col w-full h-[55%] px-4 py-6">
                  <div className="h-full flex gap-2 flex-col">
                    <div className="flex w-full items-center h-3 justify-between">
                      <Link href={p._embedded.author[0].link}>
                        <p className="text-black text-[14px]">
                          {p._embedded.author[0].name}
                        </p>
                      </Link>

                      <p className="text-black text-[14px]">
                        {dayjs(p.date).format("DD/MM/YYYY")}
                      </p>
                    </div>
                    <a className="w-[90%]" href="#">
                      <h5
                        className={`text-xl font-bold tracking-tight ${
                          p.title.rendered.length > 86
                            ? "overflow-clip whitespace-normal  text-ellipsis"
                            : ""
                        }  h-[120px]  text-black  `}
                      >
                        {p.title.rendered}
                      </h5>
                    </a>
                    <a
                      href={p.link}
                      className="text-sm hover:bg-white hover:text-black border hover:border-black transition font-medium text-center w-[200px] flex items-center justify-center h-10 rounded-lg bg-black text-white "
                    >
                      ler agora
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={` ${style.divFooter} flex items-center justify-center w-full`}
        >
          <Link
            href="https://blog.uxgroup.com.br/"
            target="_blank"
            className={`hover:font-semibold md:w-[225px] w-full text-white transition hover:shadow-md bg-black rounded-lg hover:bg-white hover:text-black border-black border ${style.gotoBlog}`}
          >
            acesse o Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
