import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8">
            <main className="flex max-w-4xl flex-col items-center gap-8 text-center">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Welcome to{' '}
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Next.js 16
                        </span>
                    </h1>
                    <p className="text-lg text-muted-foreground sm:text-xl">
                        Get started by editing{' '}
                        <code className="rounded bg-muted px-2 py-1 font-mono text-sm font-semibold">
                            src/app/page.tsx
                        </code>
                    </p>
                </div>

                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg">Click Me - Default</Button>
                    <Button size="lg" variant="outline">
                        Outline Button
                    </Button>
                    <Button size="lg" variant="secondary">
                        Secondary
                    </Button>
                </div>
            </main>
        </div>
    );
}
