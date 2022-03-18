import { TableContainer } from "./styledComponent"


const CustomTable: React.FC<{data:any[], title:string[]}> = ({title, data}) => {

    return(
        <TableContainer>
            <thead>
                <tr>
                    {title? title.map(data => <th>{data}</th>) : ""}
                </tr>
            </thead>
            <tbody>
                {data? data.map((data) => {
                    let col = []
                    for(const props in data){
                        col.push(data[props])
                    }
                    return(
                        <tr>
                            {
                                col.map(item=> <td>{item}</td>)
                            }
                        </tr>
                    )
                }):""}
            </tbody>
        </TableContainer>
    )
}

export default CustomTable