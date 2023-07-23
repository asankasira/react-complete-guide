import {NewsLetterSignup} from "../components/NewsLetterSignup";
import {PageContent} from "../components/page-content";

export const NewsLetterPage = () => {
    return (
        <PageContent title="Join our awesome newsletter!">
            <NewsLetterSignup />
        </PageContent>
    );
}

export async function action({ request }) {
    const data = await request.formData();
    const email = data.get('email');

    // send to backend newsletter server ...
    console.log(email);
    return { message: 'Signup successful!' };
}