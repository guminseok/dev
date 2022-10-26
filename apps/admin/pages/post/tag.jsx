import { useState } from "react";
import { Table_G } from "../../components/Table_G";
import { tagIchiranHead } from "../../mock-data/mock_data";
import { tagData } from "../../mock-data/tag_Data";
import { PPTitles } from "../../utils/util_const";
import { CTForm } from "./category";

const Tag = () => {
  const pTitle = PPTitles.新規タグ;

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <div className="flex flex-none bg-red-000 h-16 my-3">
          <h1>{pTitle}</h1>
        </div>
        <div className="flex-initial bg-green-200 h-full">
          <div className="bg-white flex h-full">
            <M_S_Layout title={pTitle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tag;

const M_S_Layout = (props) => {
  const { title } = props;
  const discLabels = ["name", "description", "slug", "count"];
  return (
    <>
      <div className={" flex-1 h-full ml-4 mb-6"}>
        <h2 className="mb-4">{title}を追加</h2>
        <CTForm title={title} />
      </div>

      <div
        className={
          " flex flex-col h-fit bg-green-000 mx-4 mb-6 items-center content-center space-y-4"
        }
      >
        <Table_G
          head={tagIchiranHead}
          rows={tagData}
          disc={discLabels}
          type={title}
        />
      </div>
    </>
  );
};
