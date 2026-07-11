import {create} from "zustand";

import {Report} from "../api/report.types";

interface ReportState{

    reports:Report[];

    selected?:Report;

    setReports:(reports:Report[])=>void;

    select:(report:Report)=>void;

}

export const useReportStore=create<ReportState>((set)=>({

    reports:[],

    selected:undefined,

    setReports:(reports)=>set({reports}),

    select:(selected)=>set({selected})

}));