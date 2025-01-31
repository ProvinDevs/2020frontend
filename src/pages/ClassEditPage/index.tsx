import React from "react";
import { useParams } from "react-router-dom";

import Header, { HeaderProps } from "../../components/common/Header";
import PageContainer from "../../components/common/Container";
import { ApiClient } from "../../api";
import ClassEditBase from "./base";

const headerProps: HeaderProps = {
  buttonText: "生徒の方",
  href: "/student/join",
};

interface Props {
  client: ApiClient;
}

const ClassEditPage = (props: Props): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <Header {...headerProps} />
      <PageContainer>
        <ClassEditBase classId={id} apiClient={props.client} />
      </PageContainer>
    </>
  );
};

export default ClassEditPage;
