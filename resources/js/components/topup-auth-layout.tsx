import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface TopUpAuthLayoutProps {
    title?: string;
    description?: string;
}

export function TopUpAuthLayout({ children, title, description }: PropsWithChildren<TopUpAuthLayoutProps>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link href={route('home')} className="flex flex-col items-center gap-3 font-medium">
                            <div className="text-5xl mb-2">💳</div>
                            <div className="text-2xl font-bold text-gray-800">TopUp Center</div>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-medium text-gray-800">{title}</h1>
                            <p className="text-center text-sm text-gray-600">{description}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}