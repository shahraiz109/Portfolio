"use client";
import { Button } from "@/app/components/ui/button";
import React, { FC, useState } from "react";
import { AiOutlineSync } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { LuLightbulb } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { TbArrowUpRightCircle } from "react-icons/tb";
import { projectsData } from "@/app/data/data";

type Props = {
  data:any,
  setOpen:(open:any)=> void
}
const DetailPage:FC<Props> = ( {data,setOpen}) => {
  console.log('data',data)
  return (
    <div className="detail-page-card">
      <div className="detail-page-header">
        <p className="detail-page-title">{data.title}</p>
        <button
          className="detail-page-close"
          onClick={() => setOpen(false)}
          aria-label="Close project detail"
        >
          <RxCross2 />
        </button>
      </div>
      <hr className="detail-page-divider" />
      <div className="detail-page-body">
        <div className="detail-page-image-wrap">
          <img
            src={data.image}
            alt={data.title}
            className="detail-page-image"
          />
        </div>
        <div className="detail-page-overview">
          <div className="detail-section-heading" >
            <AiOutlineSync className="icon1" />
            <p>Project Overview</p>
          </div>
            <p></p>
          <p className="detail-text">{data.details.desc2}</p>
          <p className="detail-highlight">
            <span>Key Achievement: </span>
            {data.details.features}
          </p>
        </div>
      </div>

      <div className="detail-section">
        <div className="detail-section-heading">
          <LuLightbulb className="icon" size={20} />
          <p>Challenges & Solutions</p>
        </div>
        <div className="detail-solution-list">
          {data?.solution?.map((item: any, index: any) => (
            <article key={index} className="detail-solution-card">
              <h3>{item.about}</h3>
              <p className="problem">Problem:</p>
              <p>{item.question}</p>
              <p className="solution">Solution:</p>
              <p>{item.solution}</p>
            </article>
          ))}
        </div>

        {/* <div className="detail-section">
          <div className="detail-section-heading">
            <TbArrowUpRightCircle size={20} className="icon" />
            <p>Key Results</p>
          </div>
          <div className="detail-keyresult-grid">
            {data?.keyResult?.map((items: any, index: any) => (
              <div key={index} className="detail-keyresult-card">
                <p>{items.text}</p>
                <p>{items.validate}</p>
              </div>
            ))}
          </div>
        </div> */}

        <div className="detail-section">
          <p className="section-title">Technologies Stack</p>
          <div className="detail-stack-grid">
            {data?.Technology?.map((item: any, index: any) => (
              <div key={index} className="detail-stack-card">
                <h4>{item.teach}:</h4>
                <p>{item.lang}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="detail-page-divider" />
      <div className="detail-actions">
        <a href={data?.liveUrl || '#'} target="_blank" rel="noreferrer" className="btn-primary">
          <BsBoxArrowUpRight />
          Visit Live Site
        </a>
        <button className="btn-secondary" onClick={() => setOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
