import { Employee } from "./employee";

export interface Project {
    employees: Employee[]
    projectId: number;
    projectName: string;
}