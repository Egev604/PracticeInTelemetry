import React from "react";
import TablePagination from "@mui/material/TablePagination";
import {SwapiResponse} from "../service/ServiceRequest";
import CustomPaginationActionsTable from "./DataDisplay";
import DataDisplay from "./DataDisplay";
interface PaginationProps<T> {
    fetchData: (page: number) => Promise<SwapiResponse<T>>;
}
interface PaginationState<T> {
    page: number;
    data: T[];
    count: number;
}
export class Pagination extends React.Component<PaginationProps<any>, PaginationState<any>> {
    constructor(props: PaginationProps<any>) {
        super(props)

        this.state = {
            page: 0,
            data: [],
            count: 0,
        };
        this.fetchData = this.fetchData.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        const {page} = this.state;
        const response = await this.props.fetchData(page);
        this.setState({
            data: response.results,
            count: response.count,
        })
    }
    async handleChangePage(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) {
        this.setState({ page: newPage }, this.fetchData);
    }
    render() {
        const { data, count, page} = this.state;
        return (
            <>
                <DataDisplay data={data}></DataDisplay>
                <TablePagination
                    rowsPerPageOptions={[10]}
                    component="div"
                    count={count}
                    rowsPerPage={10}
                    page={page}
                    onPageChange={this.handleChangePage}
                />
            </>
        );
    }
}
/*{data.map(item=>Object.keys(item).map(value=>console.log(item[value])))}*/
