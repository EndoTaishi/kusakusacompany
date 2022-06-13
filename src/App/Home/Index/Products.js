import styled from "styled-components"

import MottoImage from "./Photos/motto.png"

const Producs = () => {
    return(
        <ProductsWrapper>
            <Container>
                <img src={MottoImage} alt="モットー" />
                <h2>合同会社草草カンパニーは、「No One Left Behind（誰も取り残されない世界）」を目指して日々躍進し続けます。</h2>
            </Container>
        </ProductsWrapper>
    )
}

const ProductsWrapper = styled.div`
    /*何もないよーん*/
`

const Container = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    padding: 20px 60px;
    width: 100%;

    img{
        width: 100%;
        margin: 0 auto;
    }

    h2{
        margin: 0;
        width: 100%;
    }
`

export default Producs;