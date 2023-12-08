import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import "../styles/Table.css";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1"
      id="course">

      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >

        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-12 pb-4 lg:pb-10 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            {/* <span className="custom-block-subtitle">
              精挑細選
            </span> */}
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              專業知識密集課程
            </h2>
            {/* <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              To Be announced
            </h2> */}

            {/* <p className="mb-16 text-customGrayText leading-loose">
              Our platform enables you to launch your data-driven projects with
              ease. Boost productivity and achieve better results. Empower your
              decision-making with advanced analytics
            </p>
            <div
              className="w-[210px] h-12 custom-button-colored mr-10 "
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </div> */}
          </div>
          {/* <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            <img
              src={featuresdiagonal}
              alt="f1"
              className="rounded-xl  custom-border-gray"
            />
          </div> */}

        </div>
        <MyTable />
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};


const MyTable = () => {
  return (
    <table className="GeneratedTable">
      <thead>
        <tr>
          <th> </th>
          <th>第一天 1/29 (一)</th>
          <th>第二天 1/30 (二)</th>
          <th>第三天 1/31 (二)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00~9:30</td>
          <td>報到</td>
          <td rowSpan="2">學生叢集競賽座談</td>
          <td rowSpan="3">國網參訪 <br></br>(大型語言模型專題演講)</td>
        </tr>
        <tr>
          <td>9:30~10:00</td>
          <td>開幕</td>
        </tr>
        <tr>
          <td>10:00~12:00</td>
          <td>高效能計算簡介</td>
          <td>超級電腦簡介實操</td>
        </tr>
        <tr>
          <td>12:00~13:30</td>
          <td>午餐</td>
          <td>午餐</td>
          <td>午餐</td>
        </tr>
        <tr>
          <td>13:30~14:30</td>
          <td rowSpan="3">Linux簡介實操</td>
          <td rowSpan="4">平行程式教學</td>
          <td>計算效能量測分析</td>
        </tr>
        <tr>
          <td>14:30~15:30</td>
          <td>系所介紹</td>
        </tr>
        <tr>
          <td>15:30~16:30</td>
          <td>頒發證書、歸賦</td>
        </tr>
        <tr>
          <td>16:30~17:30</td>
          <td>校園參訪</td>
          <td rowSpan="3"></td>
        </tr>
        <tr>
          <td>17:30~19:00</td>
          <td>晚餐</td>
          <td>晚餐</td>
        </tr>
        <tr>
          <td>19:00~21:30</td>
          <td>Linux 實戰練習</td>
          <td>平行程式實戰練習</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MyTable;