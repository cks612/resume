import React from "react";
import * as S from "../../styles/_PersonalInfoStyle";

export const PersonalInfo = () => {
  return (
    <S.CommonContainer>
      <S.CommonSubject>
        <S.LeftSideArea>
          <S.ProfileImgContainer>
            <S.ProfileImg>
              <img
                src="https://user-images.githubusercontent.com/66737450/174422458-b4392872-c9d4-4dd2-a9c3-1472a0a47a43.JPG"
                alt="위코드 커뮤니티상 최규성"
              />
            </S.ProfileImg>
          </S.ProfileImgContainer>
        </S.LeftSideArea>
        <S.RightSideArea>
          <S.RightSideContents>
            <S.MyName>
              <S.CommonFontStyle>최규성 (voyage-dev)</S.CommonFontStyle>
            </S.MyName>
          </S.RightSideContents>
          <S.RightSideContents>
            <S.Contact>
              <S.ContactRow>
                <i className="fa fa-duotone fa-envelope " />
                <a href="mailto:kyusung612@gmail.com">kyusung612@gmail.com</a>
              </S.ContactRow>
              <S.ContactRow>
                <i className="fa fa-duotone fa-phone" />
                <span>010-9599-**** (Contact if you want my #)</span>
              </S.ContactRow>
              <S.ContactRow>
                <i className="fa fa-brands fa-github" />
                <a
                  href="https://github.com/cks612"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/cks612
                </a>
              </S.ContactRow>
              <S.ContactRow>
                <i className="fa fa-solid fa-blog" />
                <a
                  href="https://voyage-dev.tistory.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://voyage-dev.tistory.com/
                </a>
              </S.ContactRow>
              <S.ContactRow>
                <i className="fa-solid fa-file" />
                <a
                  href="https://orchid-wolfberry-ce6.notion.site/1fc3ee07720a4a44bc20703a02bface6"
                  target="_blank"
                  rel="noreferrer"
                >
                  노션 이력서
                </a>

                <i className="fa-regular fa-id-card lastone" />

                <a
                  href="https://orchid-wolfberry-ce6.notion.site/portfolio-da7381b8f0d64eecb71b472c47dd7852?pvs=74"
                  target="_blank"
                  rel="noreferrer"
                >
                  포트폴리오
                </a>
                <i className="fa-solid fa-circle-play"></i>
                <a
                  href="https://cks612.github.io/playground/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voyage's Playground
                </a>
              </S.ContactRow>
            </S.Contact>
          </S.RightSideContents>
          <S.RightSideContents>
            <S.SimpleIntroduce>
              <i className="fa fa-solid fa-anchor" />
              <span>안녕하세요 코딩으로 항해하면서 성장하는 개발자입니다!</span>
            </S.SimpleIntroduce>
          </S.RightSideContents>
        </S.RightSideArea>
      </S.CommonSubject>
    </S.CommonContainer>
  );
};
