require("dotenv").config();
const {
  sendAnalysisCompleteEmail,
} = require("./dist/services/email.service.js");

async function testAnalysisCompleteEmail() {
  const to = "mitraswat999@gmail.com"; // Change to your email if needed
  const name = "Simon";
  const analysisName = "Sales Report Q2 2025";
  console.log(`📧 Sending analysis complete email to ${to}...`);
  await sendAnalysisCompleteEmail(to, name, analysisName);
  console.log("✅ Analysis complete email sent!");
}

testAnalysisCompleteEmail();
