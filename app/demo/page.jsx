export default function DemoPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
            <div className="max-w-3xl rounded-lg bg-white p-8 shadow-lg">
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">OpenAI Chat Widget Demo</h1>

                <p className="mb-8 text-lg text-gray-600">
                    This page demonstrates how the chat widget appears when embedded on a website.
                    The widget appears as a chat bubble in the bottom right corner. Click it to open
                    the chat interface!
                </p>

                <div className="mb-8 rounded-lg bg-gray-100 p-4">
                    <h2 className="mb-4 text-xl font-semibold text-gray-800">How to Add This Widget to Your Website</h2>
                    <p className="mb-4 text-gray-600">
                        Simply add the following script tag to your HTML:
                    </p>

                    <pre className="overflow-x-auto rounded bg-gray-800 p-4 text-sm text-white">
                        {` <script 
                        data-project-id="myProject"
                        data-tags="chat,support" 
                        src="https://custom-chatbot-widget.netlify.app/inject.js">
                        </script>`}
                    </pre>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg bg-blue-50 p-4">
                        <h3 className="mb-2 text-lg font-medium text-blue-800">Customization Options</h3>
                        <ul className="list-inside list-disc space-y-1 text-blue-700">
                            <li>Change colors and appearance</li>
                            <li>Set custom greeting messages</li>
                            <li>Position the widget anywhere</li>
                            <li>Add custom tags for context</li>
                        </ul>
                    </div>

                    <div className="rounded-lg bg-green-50 p-4">
                        <h3 className="mb-2 text-lg font-medium text-green-800">Use Cases</h3>
                        <ul className="list-inside list-disc space-y-1 text-green-700">
                            <li>Customer support automation</li>
                            <li>Product documentation assistant</li>
                            <li>Lead generation and qualification</li>
                            <li>Personalized recommendations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}