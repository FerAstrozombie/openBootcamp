import { CONECCION } from "../../models/conected";
import { User } from "../../models/user";
import ComponenteB from "../pure/componenteB";

const ComponenteA = () => {

    const defaulUser = new User("Fernando", "Lair", "fernando_punk77@hotmail.com", CONECCION.DESCONECTADO);

    return (
        <div>
            <ComponenteB user={defaulUser} />
        </div>
    );
};

export default ComponenteA;
