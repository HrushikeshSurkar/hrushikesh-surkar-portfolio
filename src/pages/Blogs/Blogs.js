import React from "react";
import VerticalCard from "../../components/ui/VerticalCard/VerticalCard";
import CommonHeader from "../../components/ui/CommonHeader/CommonHeader";
import Assets from "../../assets/Assets";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section className="blog-section">
      <CommonHeader
        title={"Blogs"}
        bgColorForHeader={"--main-color"}
        colorForHeader={"--main-bg-color"}
      />
      <section className="blogs-card">
        <VerticalCard
          image={Assets.css}
          cardTitle="CSS Insights: A Complete Guide"
          infoText="Master CSS with our comprehensive tutorials. CSS is an essential part of web design. Subscribe to our blog today and enhance your CSS skills!"
          buttonText="Read More"
          buttonLink="https://css-blog-learn-with-hrushikesh.blogspot.com/"
          imageFitStyle={"fill"}
        />
        <VerticalCard
          image={Assets.angular}
          cardTitle="All About Angular: A Complete Guide"
          infoText="Explore the latest features and best practices in Angular development. Master Angular and build powerful web applications."
          buttonText="Read More"
          buttonLink="https://angular-blog-learn-with-hrushikesh.blogspot.com/"
          imageFitStyle={"cover"}
        />
        <VerticalCard
          image={Assets.tools}
          cardTitle="The Tool Chest: All useful tools for Developers"
          infoText="Discover a collection of useful tools for developers. Our blog provides insights into various tools that can enhance your development workflow."
          buttonText="Read More"
          buttonLink="https://the-tool-chest.blogspot.com/"
          imageFitStyle={"cover"}
        />
      </section>
    </section>
  );
};

export default Blogs;
