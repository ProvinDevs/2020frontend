import React, { FC } from "react";
import FeatureList, { Feature } from "../components/common/list";
import styles from "../scss/pages/about.scss";
import PageContainer from "../components/common/Container";
import Header, { HeaderProps } from "../components/common/Header";

const headerProps: HeaderProps = {
  role: "生徒",
  href: "/",
};

const About: FC = () => {
  const Features: Feature[] = [
    {
      id: 1,
      title: "導入の負担が少ない",
      image: "../image/sample.png",
      explanation:
        "2.5次元黒板はスマホとARマーカーで完結するため、新たに機材の導入の必要がありません。",
    },
    {
      id: 2,
      title: "かさばらない",
      image: "../image/sample.png",
      explanation: "大きな資料を保管する必要がありません。ARマーカーは同じものを使用できます。",
    },
    {
      id: 3,
      title: "サンプル",
      image: "../image/sample.png",
      explanation: "にゃーん（もうひとつぐらい書きたい。考えときます）",
    },
  ];

  return (
    <>
      <Header {...headerProps} />
      <div className={styles.head}>
        <h1>Webで資料を黒板の中に展開</h1>
        <p className={styles.SubHeading}>
          ARのマーカーを黒板に貼り付けて、カメラを通して見ることで資料を映しだせます。
        </p>
      </div>
      <PageContainer>
        <FeatureList Features={Features} />
      </PageContainer>
    </>
  );
};

export default About;
