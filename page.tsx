"use client";
import React from "react";
import Image from 'next/image';
import "./styles.css";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center background">
      <div className="newspaper-container">
        <div className="newspaper-header mb-6">
          <h1 className="newspaper-title">뉴스 요약 프로젝트</h1>
          <p className="text-center text-gray-700 subtitle">최신 뉴스를 모아서 간단하게 요약해드립니다.</p>
        </div>
        <div className="newspaper-content">
          <section className="newspaper-section">
            <h2 className="newspaper-subtitle">프로젝트 소개</h2>
            <p className="newspaper-text">
              우리 프로젝트는 최신 뉴스를 모아서 간단하게 요약해주는 서비스입니다. 경제, 정치, 사회, 생활/문학, 세계, 스포츠, IT 등의 다양한 카테고리의 뉴스를 빠르고 쉽게 접할 수 있습니다.
            </p>
            <p className="newspaper-text">
              각 카테고리를 선택하면 해당 카테고리의 최신 뉴스 요약을 확인할 수 있습니다. 이 프로젝트는 최신 정보를 빠르게 습득하고자 하는 사람들에게 유용한 도구가 될 것입니다.
            </p>
          </section>
          <section className="newspaper-section">
            <h2 className="newspaper-subtitle">기능 및 혜택</h2>
            <p className="newspaper-text">
              우리 서비스는 사용자가 최신 뉴스를 빠르게 접할 수 있도록 도와줍니다. 다양한 카테고리를 통해 관심 분야의 뉴스를 쉽게 찾을 수 있습니다.
            </p>
            <p className="newspaper-text">
              또한, 요약된 뉴스는 시간을 절약할 수 있도록 도와줍니다. 더 많은 정보가 필요하다면 언제든지 뉴스 원문을 확인할 수 있습니다.
            </p>
            <p className="newspaper-text">
              우리 서비스는 가짜 뉴스를 선별하여 사용자에게 정확한 기사 내용을 전달합니다. 이를 통해 정보의 질을 향상시키고 신뢰성을 확보할 수 있습니다.
            </p>
            <p className="newspaper-text">
              사용자는 최신 뉴스를 빠르고 효율적으로 접할 수 있으며, 시간과 노력을 절약할 수 있습니다. 우리의 목표는 사용자가 신뢰할 수 있는 뉴스를 제공하는 것입니다.
            </p>
          </section>
          <section className="newspaper-section">
            <h2 className="newspaper-subtitle">예시 기사</h2>
            <div className="example-article">
              <p className="newspaper-text">
                여러 개의 기사를 하나의 기사로 요약하는 기능을 예시로 보여드립니다. 아래 이미지를 통해 뉴스 요약 프로젝트의 결과물을 확인할 수 있습니다.
              </p>
              <Image src="/An_illustration_showing_multiple_newspapers_on_the.png" alt="예시 기사 요약" className="example-image" layout="responsive" width={800} height={400} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
