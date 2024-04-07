import { Heading } from "@/types/CustomComponents";

interface ViewWrapperProps {
  heading?: Heading;
  children: JSX.Element;
}

const ViewWrapper = ({ heading, children }: ViewWrapperProps) => {
  return (
    <article className="view-wrapper">
      {heading && (
        <section className="heading">
          <h1>{heading.title}</h1>
          {heading.subTitle && <h2>{heading.subTitle}</h2>}
        </section>
      )}
      <section className="content">{children}</section>
    </article>
  );
};

export default ViewWrapper;
