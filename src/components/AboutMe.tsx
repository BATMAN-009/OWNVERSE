const AboutMe = () => {
  return (
    <section className="bg-dark-bg text-dark-foreground py-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg lg:text-xl leading-relaxed text-muted-dark-foreground">
          I'm a passionate growth hacker and educator who has helped thousands of professionals 
          unlock their potential through strategic digital marketing and personal branding. 
          With over 8 years of experience in the startup ecosystem, I've spoken at 40+ events, 
          conducted hundreds of workshops, and mentored countless entrepreneurs on their journey 
          to success. My mission is to democratize growth knowledge and make it accessible to everyone.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">8+</div>
            <div className="text-muted-dark-foreground mt-2">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">40K+</div>
            <div className="text-muted-dark-foreground mt-2">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">100+</div>
            <div className="text-muted-dark-foreground mt-2">Companies Helped</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;