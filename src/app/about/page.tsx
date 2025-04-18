import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">About Jadek PC Solutions</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your trusted partner for all your computing needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2010, Jadek PC Solutions began with a simple mission: to provide high-quality computers and exceptional service to our customers. What started as a small repair shop has grown into a trusted provider of custom PCs, laptops, and accessories.
                </p>
                <p className="text-muted-foreground">
                  Our team of experienced technicians and PC enthusiasts are passionate about technology and dedicated to helping our customers find the perfect computing solutions for their needs.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 h-64 flex items-center justify-center">
                <span className="text-6xl">🖥️</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                At Jadek PC Solutions, we're guided by a set of core values that define who we are and how we operate.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Every product we sell meets our rigorous standards for performance and reliability.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Service</h3>
                <p className="text-muted-foreground">
                  We believe in providing exceptional customer service, from helping you choose the right product to providing ongoing support.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay at the forefront of technology, constantly updating our product offerings to include the latest innovations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
                Meet the dedicated professionals who make Jadek PC Solutions possible. Our team combines technical expertise with a passion for customer service.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { name: "John Doe", role: "Founder & CEO", emoji: "👨‍💼" },
                  { name: "Jane Smith", role: "Technical Director", emoji: "👩‍💻" },
                  { name: "Mike Johnson", role: "Customer Service Manager", emoji: "👨‍💼" },
                  { name: "Sarah Williams", role: "PC Build Specialist", emoji: "👩‍🔧" }
                ].map((member, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center text-4xl mb-4">
                      {member.emoji}
                    </div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
