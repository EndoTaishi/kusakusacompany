import styled from "styled-components"

import MottoImage from "./Photos/motto.png"

const Company = () => {
    return(
        <ProductsWrapper>
            <Container>
                <h2>COMPANY</h2>
                <img src={MottoImage} alt="企業理念" />
                <h3>合同会社草草カンパニーは、「No One Left Behind（誰も取り残されない世界）」を目指して日々躍進し続けます。</h3>
            </Container>
        </ProductsWrapper>
    )
}

const ProductsWrapper = styled.div`
    background-color: #ffffff;
    padding: 40px 60px;
`

const Container = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;

    h2 {
    background-color: var(--main-color);
    color: #eeeeee;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 30px;
    padding: 20px 60px;
    text-align: center;
    }

    img{
        width: 100%;
        margin: 30px 0;
    }

    h3{
        text-align: center;
        margin: 0;
        width: 100%;
    }
`

export default Company;