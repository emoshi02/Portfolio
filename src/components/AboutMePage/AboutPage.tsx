import React, { useRef } from 'react';
import { designIcons, programmingIcons } from '../../skills';
import ExperienceDiagram from './ExperienceDiagram';
import Skills from './Skills';
import { useAnimate } from '../../UseAnimate';

const AboutPage = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  useAnimate(bgRef);

  return (
    <main className="mainBg" ref={bgRef}>
      <section className="about-me-page">
        <div className="about-me-wrapper">
          <h1 className="label">Apie mane.</h1>
          <p className="aditional-desc">
            Sveiki! Esu Emilija, pradedančioji front-end programuotoja. Esu
            kūrybinga, protinga bei labai atsakinga. Esu pasiryžusi toliau augti
            ir mokytis, kad galėčiau pritaikyti naujausias technologijas ir
            įgytas žinias savo darbuose. Portfolio - ne tik mano darbų rinkinys,
            bet ir mano pasaulėžiūros bei įsipareigojimo kūrybiškumui ir
            aukštiems standartams atspindys. <br />
            <br />
            Džiaugiuosi galėdama pasidalinti savo darbais su Jumis. Leiskite man
            parodyti, kaip aš galiu pridėti vertės Jūsų projektams!
          </p>
        </div>
      </section>
      <ExperienceDiagram />
      <div className="experience-text-wrapper">
        <p className="aditional-desc exp-text">
          Praktikos bei įgytų žinių apžvalga.
        </p>
      </div>
      <div className="skill-wrapper">
        <Skills
          skillLabel="Programavimo įgūdžiai"
          skillArray={programmingIcons}
        />
        <Skills skillLabel="Dizaino įgūdžiai" skillArray={designIcons} />
      </div>
    </main>
  );
};

export default AboutPage;
