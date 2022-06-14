import React from "react";
import * as S from "../../styles/__PersonalInfoStyle";

export const PersonalInfo = () => {
  return (
    <S.CommonContainer>
      <S.CommonSubject>
        <S.LeftSideArea>
          <S.ProfileImgContainer>
            <S.ProfileImg />
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
                <i className="fa fa-solid fa-blog " />
                <a
                  href="https://voyage-dev.tistory.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://voyage-dev.tistory.com/
                </a>
              </S.ContactRow>
            </S.Contact>
          </S.RightSideContents>
          <S.RightSideContents>
            <S.SimpleIntroduce>
              <i className="fa fa-solid fa-anchor" />
              <span>
                안녕하세요 코딩으로 항해하면서 성장하는 주니어 개발자입니다!
              </span>
            </S.SimpleIntroduce>
          </S.RightSideContents>
        </S.RightSideArea>
      </S.CommonSubject>
    </S.CommonContainer>
  );
};
