import CarrouselCards from "../carrouselCards";
import style from "./style.module.scss";

interface Content {
  title: string;
  banner: string;
  text: string;
  link:string;
  
}

interface ContentCard{
  content: Content[];
  colorText: string;
}

function UxMidia({content, colorText}: ContentCard) {


  return (
    <>
      <section className={style.UxMidia}>
        <div className={style.Container}>
          <div className={style.BoxUxMidia}>
            <div className={style.Content}>
              <h1>UX na mídia</h1>
            </div>
          </div>
        </div>
        <CarrouselCards colorText={colorText} content={content} />
      </section>
    </>
  );
}

export default UxMidia;
