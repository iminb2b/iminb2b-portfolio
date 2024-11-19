import { FC } from "react";
import { css } from "@emotion/react";

const list = css`
  padding: 0.5rem 0;
  list-style-type: circle;
  line-height: 1.6;

  @media screen and (max-width: 688px) {
    padding: 0.5rem 0;
  }
`;

const educationContainer = css`
  width: 100%;
  padding: 1rem 0;
`;

const mediumTitle = css`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const AboutMeSkillList: FC = () => {
  return (
    <div css={educationContainer}>
      <h4 css={mediumTitle}>Technical Skills</h4>
      <ul css={list}>
        <li>
          <b> Programming Languages: </b>Javascript, Typescript, HTML, CSS,
          Sass, GraphQL
        </li>
        <li>
          <b> Libraries & Frameworks: </b> Next.js, React, Gastby, Node.js,
          Styled Component, Material Ui, Emotion, CapacitorJs{" "}
        </li>
        <li>
          <b> Tools & Platforms: </b> Git, Github, GitLab, Mattermost, Netlify,
          Figma, Firebase, Docker, Vercel
        </li>
      </ul>
    </div>
  );
};

export default AboutMeSkillList;
