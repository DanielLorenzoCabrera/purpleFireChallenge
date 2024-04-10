
import GenericButton from "@/components/buttons/GenericButton";
import { useState } from "react";

const NewsletterSubscription = () => {
const [subscriptionButtonValue, setSubscriptionButtonValue] = useState('subscribe')
const [subscriptionButtonClassname, setSubscriptionButtonClassname] = useState('subscribe')
     const onSubscription = () => {
        setSubscriptionButtonValue('subscribed!')
        setSubscriptionButtonClassname('subscribed')
     }
  return (
    <article className="newsletter">
      <div className="blur"></div>
      <section>
        <h5>Join our newsletter and get offers</h5>
        <span>Sign up our newsletter</span>
      </section>
      <section>
        <input
          type="text"
          name="newsletter email"
          placeholder="Enter your email"
        />
        <GenericButton value={subscriptionButtonValue} className={subscriptionButtonClassname} onClick={onSubscription} />
      </section>
    </article>
  );
};

export default NewsletterSubscription;
