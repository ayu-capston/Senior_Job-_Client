import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LectureCarousel from '@components/Carousel/LectureCarousel';
import SearchBar from '@components/Search/SearchBar';
import Option from '@components/Option/Option';
import FilterGroup from '@components/Filiter/FilterGroup';
import Card from '@components/Card/Card';
import Pagination from '@components/Pagination/Pagination';

import * as s from './StyledLectureList';

export default function LectureList() {
    const [isSearchKeyWord, setSearchKeyWord] = useState(''); // Search Key word
    const [isOption, setOption] = useState('최신순'); // Sorting
    const [isProvince, setProvince] = useState(''); // Region - Province
    const [isCountry, setCountry] = useState(''); // Region - Country
    const [isState, setState] = useState<LectureState>({
        recruit: true,
        wait: false,
        progress: false
    });
    const [isCategory, setCateogory] = useState<LectureCategory>({
        home: false,
        business: false,
        design: false,
        development: false,
        health: false,
        beauty: false,
        cooking: false,
        etc: false
    });

    return (
        <>
            <LectureCarousel />
            <section></section>
            <s.RecommendBanner>
                <s.RecommendBannerTypo>강좌를 개설하고 직접 수업을 진행해보세요!</s.RecommendBannerTypo>
                <Link to='/mypage/lecture/created/form'>
                    <s.RecommendBannerButton>강좌 개설하기</s.RecommendBannerButton>
                </Link>
            </s.RecommendBanner>
            <s.SearchGroup>
                {/* 검색 */}

                <SearchBar
                    name='lectureTitle'
                    value={isSearchKeyWord}
                    placeholder='찾으시는 강좌명을 입력해주세요'
                    onChange={(e) => {
                        setSearchKeyWord(e);
                    }}
                />

                {/* 정렬 */}
                <Option
                    value={isOption}
                    onChange={(e) => {
                        setOption(e);
                    }}
                />
            </s.SearchGroup>
            <s.ContentGroup>
                <FilterGroup
                    state={isState}
                    category={isCategory}
                    provinceOnChange={(e) => {
                        setProvince(e);
                    }}
                    countryOnChange={(e) => {
                        setCountry(e);
                    }}
                    stateOnChange={(e) => {
                        setState(e);
                    }}
                    categoryOnChange={(e) => {
                        setCateogory(e);
                    }}
                />
                {/* 카드뷰 */}
                <s.LectureItemGroup>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </s.LectureItemGroup>
            </s.ContentGroup>
            <Pagination />
        </>
    );
}