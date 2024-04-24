import style from "./style.module.scss";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Post, WPResponse } from "@/components/institucional/blog/types";
import Image from "next/image";
import bannerTeste from "../../../assets/fusion/fusionBanner.png";
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
      <div className="w-[90%]">
        <div className={`w-full m-0  ${style.titleBlock}`}>
          <h1 className="md:w-4/5 w-full text-black text-left md:text-center ">
            Conteúdos exclusivos sobre o nosso setor.
          </h1>
        </div>
        <div className={style.box}>
          <div className={style.featured}>
            <Link
              target="_blank"
              href={post.link}
              style={{
                display: "block",
                position: "absolute",
                zIndex: 0,
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                objectFit: "fill",
              }}
            >
              <Image
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt={post.title.rendered}
                style={{ zIndex: 1, width: "100%", height: "100%" }}
              />
              {/* <Image
                src={bannerTeste.src}
                alt={post.title.rendered}
                width={100}
                height={100}
                style={{ zIndex: 1, width: "100%", height: "100%" }}
              /> */}
            </Link>
            <Link
              target="_blank"
              href={post._embedded["wp:term"][0][0].link}
              className={style.tag}
            >
              {post._embedded["wp:term"][0][0].name}
            </Link>
            <div className={style.content}>
              <Link href={post.link}>
                <h3 className={style.title}>{post.title.rendered}</h3>
              </Link>
              <div
                className={style.text}
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              ></div>
              <Link href={post.link}>Ler Completo &gt;</Link>
            </div>
          </div>

          <div className="w-full overflow-auto">
            {posts.map((p) => (
              <div className="flex h-[400px] flex-col md:w-[430px] w-full text-black bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex w-full h-[45%]">
                  <Image
                    width={100}
                    height={100}
                    className="rounded-t-lg  w-full h"
                    src={
                      p._embedded["wp:featuredmedia"][0].source_url ??
                      "https://blog.uxgroup.com.br/wp-content/plugins/anwp-post-grid-for-elementor/public/img/empty_image.jpg"
                    }
                    alt=""
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
                      <h5 className="text-xl font-bold tracking-tight text-black">
                        {p.title.rendered}
                      </h5>
                    </a>
                    <p
                      className="text-black text-[16px] overflow-hidden whitespace-nowrap text-ellipsis"
                      dangerouslySetInnerHTML={{
                        __html: p.excerpt.rendered,
                      }}
                    ></p>
                    <a
                      href={p.link}
                      className="text-sm hover:bg-white hover:text-black border hover:border-black transition font-medium text-center w-[200px] flex items-center justify-center h-8 rounded-lg bg-black text-white "
                    >
                      ler completo
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
            acesse o blog
          </Link>
        </div>
      </div>
    </section>
  );
}
