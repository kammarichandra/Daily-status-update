import { useCallback, useMemo, useState } from "react";

// import ExpenseForm from "../components/ExpenseForm";
// import ExpenseList from "../components/ExpenseList";
// import SearchBar from "../components/SearchBar";
// import SummaryCard from "../components/SummaryCard";

// import { initialExpenses } from "../data/expenses";
import ExpenseForm from "../Components/ExpenseForm";
import ExpenseList from "../Components/ExpenseList";
import SearchBar from "../Components/SearchBar";
import SummaryCard from "../Components/SummaryCard";
import { initialExpenses } from "../Data/expenses";

function Dashboard() {

  const [expenses, setExpenses] = useState(initialExpenses);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

 
  const filteredExpenses = useMemo(() => {

    console.log("Filtering expenses...");

    return expenses.filter((expense) => {

      const matchesSearch = expense.title.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === "All" || expense.category === category;

      return ( matchesSearch && matchesCategory );

    });

  }, [expenses, search, category]);

  // -----------------------------
  // useMemo #2
  // Calculate total
  // -----------------------------

  const totalExpense = useMemo(() => {
    console.log("Calculating total...");

    return expenses.reduce(
      (total, expense) =>
        total + expense.amount, 0
    );
  }, [expenses]);

  // -----------------------------
  // useMemo #3
  // Calculate category totals
  // -----------------------------

  const categoryTotals = useMemo(() => {

    const totals = {};

    expenses.forEach((expense) => {

      totals[expense.category] = (totals[expense.category] || 0) + expense.amount;

    });

    return totals;
  }, [expenses]);

  // -----------------------------
  // useCallback #1
  // Add expense
  // -----------------------------

  const handleAddExpense = useCallback(

    (newExpense) => {

      setExpenses((current) => [
        newExpense,
        ...current,
      ]);

    },[] );

  // -----------------------------
  // useCallback #2
  // Delete expense
  // -----------------------------

  const handleDeleteExpense = useCallback(
    (id) => {
      setExpenses((current) =>
        current.filter(
          (expense) => expense.id !== id
        )
      );
    },[] );

  return (
    <div>
      <h1> Expense Dashboard</h1>

      {/* Summary */}

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "25px",
          flexWrap: "wrap",
        }}
      >
        <SummaryCard
          title="Total Expenses"
          amount={totalExpense}
          color="#dc2626"
        />

        <SummaryCard
          title="Food"
          amount={categoryTotals.Food || 0}
          color="#16a34a"
        />

        <SummaryCard
          title="Travel"
          amount={categoryTotals.Travel || 0}
          color="#2563eb"
        />

        <SummaryCard
          title="Bills"
          amount={categoryTotals.Bills || 0}
          color="#9333ea"
        />
      </div>

      {/* Add Expense */}

      <ExpenseForm
        onAddExpense={handleAddExpense}
      />

      {/* Search */}

      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {/* Expense List */}

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={handleDeleteExpense}
      />
    </div>
  );
}

export default Dashboard;