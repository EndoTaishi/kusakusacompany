import styled from "styled-components"
import Mixins from "../../../Styles/Mixins.js"
import Variables from "../../../Variables.js";

const Company = () => {
  return (
    <CompanyContainer>
      <CompanyInnerContainer>
        <h2>COMPANY</h2>
        <table>
          <tbody>
            <tr>
              <td><strong>会社名</strong></td>
              <td>合同会社草草カンパニー</td>
            </tr>
            <tr>
              <td><strong>設立日</strong></td>
              <td>2022年02月21日</td>
            </tr>
            <tr>
              <td><strong>代表者</strong></td>
              <td>遠藤 大志</td>
            </tr>
            <tr>
              <td><strong>資本金</strong></td>
              <td>93円</td>
            </tr>
            <tr>
              <td><strong>所在地</strong></td>
              <td>〒301-0856 茨城県龍ケ崎市貝原塚町3717-1</td>
            </tr>
            <tr>
              <td><strong>従業員</strong></td>
              <td>1名</td>
            </tr>
          </tbody>
        </table>
      </CompanyInnerContainer>
    </CompanyContainer>
  )
}

const CompanyContainer = styled.div`
  padding: 60px;

  ${Mixins.screenSp} {
    padding: 0;
  }
`

const CompanyInnerContainer = styled.div`
  background-color: var(--background-color-reverse);
  color: var(--text-color-reverse);
  max-width: ${Variables.innerContainer};
  margin: 0 auto;
  padding: 40px;
  overflow: scroll;
  width: 100%;

  ${Mixins.screenSp} {
    padding: 40px 20px;
  }

  h2 {
    font-weight: bold;
    padding-bottom: 20px;
  }

  table {
    margin: 0 auto;
    width: 100%;

    * {
      font-size: 14px;
      white-space: nowrap;

      ${Mixins.screenSp} {
        font-size: 12px;
      }
    }

    li {
      margin: 0;
      margin-bottom: 15px;
      list-style: none;

      &:last-child {
        margin-bottom: 0;
      }
    }

    tr {
      display: flex;
      border-bottom: 1px solid var(--line-color-light);
      width: 100%;

      &:first-child {
        border-top: 1px solid var(--line-color-light);
      }
    }

    td {
      min-width: 125px;
      padding: 20px;
      padding-left: 2px;

      ${Mixins.screenSp} {
        min-width: 75px;
        padding-left: 0;
      }
    }
  }
`

export default Company