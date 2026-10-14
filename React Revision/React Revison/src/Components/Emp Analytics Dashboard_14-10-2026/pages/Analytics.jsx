import { useMemo } from "react";
import employees from "../data/Emp";

function Analytics() {
    console.count("Analytics page rendered");

    const analytics = useMemo(() => {
        const departments = {};

        for (const employee of employees) {
            if (!departments[employee.department]) {
                departments[employee.department] = {
                    count: 0,
                    salary: 0,
                };
            }

            departments[employee.department].count++;
            departments[employee.department].salary += employee.salary;
        }

        return Object.entries(departments).map(([name, data]) => ({
            name,
            count: data.count,
            averageSalary: data.salary / data.count,
        }));
    }, []);

    return (
        <main className="dashboard">
            <h1>Workforce Analytics</h1>
            <p>Department-level insights across the employee dataset.</p>

            <div className="analytics-grid">
                {analytics.map((item) => (
                    <article className="summary-card" key={item.name}>
                        <h3>{item.name}</h3>
                        <p>{item.count.toLocaleString("en-IN")} employees</p>
                        <p>
                            Average salary:{" "}
                            {item.averageSalary.toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                                maximumFractionDigits: 0,
                            })}
                        </p>
                    </article>
                ))}
            </div>
        </main>
    );
}

export default Analytics;