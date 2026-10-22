const bio =
  'I am a third-year IT Management student at KBTU. I am interested in subjects that can help me learn new technologies and upgrade my skills for the future. I also want to improve my practical skills by building real web projects.';

export default function HomePage() {
  return (
    <main className="home-page">
      <h1>Welcome to My Blog</h1>

      <section className="profile-card">
        <img width={200}
          src={`${import.meta.env.BASE_URL}Aibol.jpeg`}
          alt="Aibol"
          className="profile-avatar"
        />

        <h2>Oralbekuly Aibol</h2>
        <p>IT Management Student</p>
        <p>{bio}</p>
      </section>
    </main>
  );
}