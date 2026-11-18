
import data from "../Data/posts.json";

export default function About() {
    var posts = data.posts
    return (
    <>
    <section className="about-section py-5" dir="rtl">
      <div className="container-xl">

        {/* Heading */}
        <div className="about-heading text-center mb-5">

          <div className="about-label">
            <span className="about-dot"></span>
            <span>من نحن</span>
            <span className="about-dot"></span>
          </div>

          <h2 className="about-title mt-3">
            مهمتنا هي{" "}
            <span className="text-gradient">الإعلام والإلهام</span>
          </h2>

          <p className="about-description mx-auto mt-3">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
            المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة
            المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى
            عالي الجودة.
          </p>

        </div>

        {/* Statistics */}
        <div className="row g-4 text-center">

          <div className="col-6 col-lg-3">
            <div className="about-stat">
              <i className="fa-solid fa-users text-2xl text-orange-500 mb-2 d-block"></i>
              <h3>+2 مليون</h3>
              <p>قارئ شهرياً</p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="about-stat">
              <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-2 d-block"></i>
              <h3>+500</h3>
              <p>مقالة منشورة</p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="about-stat">
              <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-2 d-block"></i>
              <h3>+50</h3>
              <p>كاتب خبير</p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="about-stat">
              <i className="fa-solid fa-book-open text-2xl text-orange-500 mb-2 d-block"></i>
              <h3>+15</h3>
              <p>تصنيف</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="values-section py-5" dir="rtl">
    <div className="container-xl">

        <div className="values-heading text-center mb-5">
        <div className="about-label">
            <span className="about-dot"></span>
            <span>قيمنا</span>
            <span className="about-dot"></span>
        </div>

        <h2 className="about-title mt-3">
            المبادئ التي توجه كل ما نقوم بإنشائه
        </h2>
        </div>

        <div className="row g-4">

        <div className="col-6 col-lg-3">
            <div className="value-card">
            <i className="fa-solid fa-bullseye"></i>
            <h4>الجودة أولاً</h4>
            <p>محتوى مدروس ومكتوب بخبرة لنقدم لك أفضل تجربة تعليمية.</p>
            </div>
        </div>

        <div className="col-6 col-lg-3">
            <div className="value-card">
            <i className="fa-solid fa-bolt"></i>
            <h4>تركيز عملي</h4>
            <p>أمثلة واقعية ونصائح عملية يمكنك تطبيقها اليوم.</p>
            </div>
        </div>

        <div className="col-6 col-lg-3">
            <div className="value-card">
            <i className="fa-solid fa-handshake"></i>
            <h4>المجتمع</h4>
            <p>تعلم وتبادل الخبرات مع آلاف المصورين.</p>
            </div>
        </div>

        <div className="col-6 col-lg-3">
            <div className="value-card">
            <i className="fa-solid fa-arrows-rotate"></i>
            <h4>دائماً محدث</h4>
            <p>أحدث الاتجاهات وأفضل الممارسات في عالم التصوير.</p>
            </div>
        </div>

        </div>
    </div>
    </section>


    <section className="team-section py-5" dir="rtl">
    <div className="container-xl">

        <div className="team-heading text-center">

        <div className="team-label">
            <span className="team-dot"></span>
            <span>فريقنا</span>
        </div>

        <h2 className="about-title mt-3">
            تعرف على كتابنا
        </h2>

        <p className="about-description mx-auto mt-3">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة
            معرفتهم مع المجتمع.
        </p>

        </div>

        <div className="row g-4 mt-4">
            {posts.map(function (post) {
                return (
                <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                    <div className="team-card">

                    <div className="team-avatar-wrap">
                        <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="team-avatar"
                        />
                        <span className="team-verified">
                        <i className="bi bi-check-lg"></i>
                        </span>
                    </div>

                    <h5 className="team-name">{post.author.name}</h5>
                    <p className="team-role">{post.author.role}</p>

                    <div className="team-social">
                        <a href={data.siteInfo.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <i className="bi bi-linkedin"></i>
                        </a>
                        <a href={data.siteInfo.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <i className="bi bi-github"></i>
                        </a>
                        <a href={data.siteInfo.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                        <i className="bi bi-twitter-x"></i>
                        </a>
                    </div>

                    </div>
                </div>
                );
            })}
        </div>

    </div>
    </section>


    <section className="contact-section py-5" dir="rtl">
    <div className="container-xl">
        <div className="contact-content text-center">

        <h2>لديك أسئلة؟ دعنا نتحدث!</h2>

        <p>
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا،
            أو تريد المساهمة، أو تريد فقط إلقاء التحية،
            لا تتردد في التواصل.
        </p>

        <div className="contact-buttons">

            <a href="mailto:info@adasa.com" className="contact-btn contact-btn-primary">
            <i className="fa-solid fa-envelope"></i>
            تواصل معنا
            </a>

            <a href="/articles" className="contact-btn contact-btn-secondary">
            تصفح المقالات
            </a>

        </div>

        </div>
    </div>
    </section>


    </>
    
    


    )
}
