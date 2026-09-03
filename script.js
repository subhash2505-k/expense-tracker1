// =============================
// LOGIN
// =============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("loginMessage");


        if (email && password) {

            localStorage.setItem(
                "loggedIn",
                "true"
            );

            message.style.color = "green";

            message.textContent =
                "Login successful!";


            setTimeout(function() {

                window.location.href =
                    "home.html";

            }, 700);

        }

    });

}


// =============================
// SHOW / HIDE PASSWORD
// =============================

const togglePassword =
    document.getElementById("togglePassword");

if (togglePassword) {

    togglePassword.addEventListener(
        "click",
        function() {

            const password =
                document.getElementById("password");


            if (password.type === "password") {

                password.type = "text";

                togglePassword.textContent =
                    "🙈";

            } else {

                password.type = "password";

                togglePassword.textContent =
                    "👁";

            }

        }
    );

}


// =============================
// LOGOUT
// =============================

function logout() {

    localStorage.removeItem(
        "loggedIn"
    );

    window.location.href =
        "index.html";
}


// =============================
// ADD EXPENSE MODAL
// =============================

function openExpenseForm() {

    document.getElementById(
        "expenseModal"
    ).style.display = "flex";
}


function closeExpenseForm() {

    document.getElementById(
        "expenseModal"
    ).style.display = "none";
}


// =============================
// SAVE EXPENSE
// =============================

const expenseForm =
    document.getElementById("expenseForm");


if (expenseForm) {

    expenseForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "expenseName"
                ).value;


            const amount =
                Number(
                    document.getElementById(
                        "expenseAmount"
                    ).value
                );


            const category =
                document.getElementById(
                    "expenseCategory"
                ).value;


            if (!name || !amount) {
                return;
            }


            // Add transaction

            const transactionList =
                document.getElementById(
                    "transactionList"
                );


            const transaction =
                document.createElement("div");


            transaction.className =
                "transaction";


            transaction.innerHTML = `

                <div class="transaction-icon">
                    ${category.substring(0, 2)}
                </div>

                <div class="transaction-info">

                    <h3>${name}</h3>

                    <p>
                        Just now
                    </p>

                </div>

                <strong class="negative">
                    - ₹${amount}
                </strong>

            `;


            transactionList.prepend(
                transaction
            );


            // Update expense

            const expenseElement =
                document.getElementById(
                    "expenses"
                );


            const currentExpenses =
                Number(
                    expenseElement.innerText
                        .replace("₹", "")
                        .replace(",", "")
                );


            const newExpenses =
                currentExpenses + amount;


            expenseElement.innerText =
                "₹" +
                newExpenses.toLocaleString(
                    "en-IN"
                );


            // Update balance

            const balanceElement =
                document.getElementById(
                    "balance"
                );


            const currentBalance =
                Number(
                    balanceElement.innerText
                        .replace("₹", "")
                        .replace(",", "")
                );


            const newBalance =
                currentBalance - amount;


            balanceElement.innerText =
                "₹" +
                newBalance.toLocaleString(
                    "en-IN"
                );


            // Close modal

            closeExpenseForm();

            expenseForm.reset();

        }
    );

}


// =============================
// VIEW ALL
// =============================

function showAllTransactions() {

    alert(
        "All transactions will be displayed here."
    );

}
