import { Badge } from "@masnry/ui";

export function SectionHeading({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
