// app/content/auth-guide.tsx

export default function AuthGuide() {
  return (
    <>
      <h2>Authentication</h2>

      <p>
        All API requests require an API key passed in the Authorization header.
      </p>

      <h3>Example</h3>

      <pre>
        <code>
{`curl https://api.example.com/users
  -H "Authorization: Bearer YOUR_API_KEY"`}
        </code>
      </pre>

      <ul>
        <li>API keys are scoped</li>
        <li>Rotate keys regularly</li>
        <li>Never expose keys publicly</li>
      </ul>
    </>
  );
}