import style from './style.module.scss';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Post, WPResponse } from '@/components/institucional/blog/types';
import Image from 'next/image';
import Link from 'next/link';

export function Blog() {
  const [post, setPost] = useState<Post>({
    id: 0,
    date: new Date().toDateString(),
    link: '',
    title: { rendered: '' },
    excerpt: { rendered: '' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: '' }],
      'wp:term': [[{ link: '', name: '' }]],
      author: [{ link: '', name: '' }],
    },
  });
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://uxgroup.com.br/index.php')
      .then((res) => res.json() as Promise<WPResponse>)
      .then((res) => {
        setPost(res['featured']);
        setPosts(res['posts']);
      })
      .catch(console.error);
  }, []);

  return (
    <section className={style.container}>
      <div className={style.margin}>
          <div className={`w-full m-0  ${style.titleBlock}`}>
          <h1 className='md:w-4/5 w-full text-black text-left md:text-center ' >
            Conteúdos exclusivos sobre o nosso setor.
          </h1>
        </div>
        <div className={style.box}>
          <div className={style.featured}>
            <Link
              target="_blank"
              href={post.link}
              style={{
                display: 'block',
                position: 'absolute',
                zIndex: 0,
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                objectFit: 'fill',
              }}
            >
              <Image
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post.title.rendered}
                style={{ zIndex: 1, width: '100%', height: '100%' }}
              />
            </Link>
            <Link
              target="_blank"
              href={post._embedded['wp:term'][0][0].link}
              className={style.tag}
            >
              {post._embedded['wp:term'][0][0].name}
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

          <div className={style.cards}>
            {posts.map((p) => (
              <div className={style.card} key={p.id}>
                <Link
                  target="_blank"
                  className={style.category}
                  href={p._embedded['wp:term'][0][0].link}
                  style={{ zIndex: 1 }}
                >
                  {p._embedded['wp:term'][0][0].name}
                </Link>
                <Link
                  target="_blank"
                  href={p.link}
                  style={{
                    display: 'block',
                    width: '234px',
                    height: '203px',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={
                      p._embedded['wp:featuredmedia'][0].source_url ??
                      'https://blog.uxgroup.com.br/wp-content/plugins/anwp-post-grid-for-elementor/public/img/empty_image.jpg'
                    }
                    alt={p.title.rendered}
                    width={234}
                    height={203}
                    style={{ position: 'absolute' }}
                  />
                </Link>
                <div className={style.release}>
                  <span>
                    <Link target="_blank" href={p._embedded.author[0].link}>
                      {p._embedded.author[0].name}
                    </Link>
                  </span>
                  <span>{dayjs(p.date).format('DD/MM/YYYY')}</span>
                </div>
                <div className={style.content}>
                  <Link href={p.link}>
                    <h3 className={style.title}>{p.title.rendered}</h3>
                  </Link>
                  <div
                    className={style.text}
                    dangerouslySetInnerHTML={{
                      __html: p.excerpt.rendered,
                    }}
                  ></div>
                  <Link href={p.link}>Ler Completo &gt;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={` ${style.divFooter} w-full`}>
          <Link
            href="https://blog.uxgroup.com.br/"
            target="_blank"
            className={`hover:font-semibold md:-w[225px] w-full text-white transition hover:shadow-md bg-black rounded-lg hover:bg-white hover:text-black border-black border ${style.gotoBlog}`}
          >
            acesse o blog
          </Link>
        </div>
      </div>
    </section>
  );
}
