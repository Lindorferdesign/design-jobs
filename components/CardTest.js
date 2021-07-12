import styled from 'styled-components'
import tw from "tailwind-styled-components"

function CardTest() {
    return (
        <Card>
            <div className="p-6  hover:shadow-lg transition-all duration-300 rounded-lg">
            <h1 className="text-xl font-bold">Test Setup 22</h1>
            <span>Lorem Ipsum dolor sit amet</span><br></br>
            <Button>Button</Button>
      </div>
      </Card>
    )
}

export default CardTest


const Card = tw.div`
    shadow-md
    rounded-lg
    color-gray-600
`;

const Button = tw.div`
    ${(p) => (p.$primary ? "bg-indigo-600" : "bg-indigo-300")}
    flex
    inline-flex
    items-center
    border
    border-transparent
    text-lg
    font-medium
    rounded
    shadow-sm
    text-white
    p-3
    mt-4

    hover:bg-indigo-700
    focus:outline-none
`




/*const Card = styled.div`
${tw`
    bg-blue-600
    shadow-md
`};
`;*/