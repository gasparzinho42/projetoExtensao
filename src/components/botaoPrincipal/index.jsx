import React from "react";
import { BotaoCustomizado} from './styles'
const BotaoPrincipal= ({text, onClick})=> {
    return (
       <BotaoCustomizado onClick={onClick}>{text}</BotaoCustomizado>
    )
}
export default BotaoPrincipal