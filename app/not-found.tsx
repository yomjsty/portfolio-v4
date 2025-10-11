"use client";

import Link from "next/link";
import FuzzyText from "@/components/FuzzyText";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-6 font-sans">
			<FuzzyText baseIntensity={0.2} fontSize="10rem">
				404
			</FuzzyText>
			<FuzzyText baseIntensity={0.2} fontSize="4rem">
				not found
			</FuzzyText>
			<Link
				className={buttonVariants({
					variant: "ghost",
					className: "mt-12 font-mono text-xl",
				})}
				href="/"
			>
				Back to home
			</Link>
		</div>
	);
}
