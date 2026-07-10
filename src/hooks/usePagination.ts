import { useState } from "react";

export function usePagination(
    initialPage = 1,
    initialSize = 25
) {

    const [page, setPage] = useState(initialPage);

    const [pageSize, setPageSize] = useState(initialSize);

    return {

        page,

        pageSize,

        setPage,

        setPageSize

    };

}