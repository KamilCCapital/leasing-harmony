
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const LeasingCalculator = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-lightGray">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg mb-6 text-center">Kalkulator Leasingowy</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Oblicz szacunkową ratę leasingu i poznaj nasze oferty
            </p>
            
            <Card className="p-6 md:p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Wartość przedmiotu leasingu (PLN)</label>
                    <Input type="number" placeholder="100 000" min="1000" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Wpłata własna (%)</label>
                    <div className="space-y-3">
                      <Slider defaultValue={[20]} max={50} step={1} />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>0%</span>
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Okres leasingu (miesięcy)</label>
                    <div className="space-y-3">
                      <Slider defaultValue={[36]} min={12} max={60} step={12} />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>12</span>
                        <span>60</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Wartość wykupu (%)</label>
                    <div className="space-y-3">
                      <Slider defaultValue={[1]} min={1} max={20} step={1} />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>1%</span>
                        <span>20%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-brand-darkGray text-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">Szacunkowa rata leasingu</h3>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2">1 897 PLN</div>
                    <div className="text-gray-300">netto miesięcznie</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span>Wartość przedmiotu:</span>
                      <span className="font-medium">100 000 PLN</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wpłata własna (20%):</span>
                      <span className="font-medium">20 000 PLN</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Okres finansowania:</span>
                      <span className="font-medium">36 miesięcy</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wartość wykupu:</span>
                      <span className="font-medium">1 000 PLN</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-brand-gold hover:bg-brand-lightGold">
                    Otrzymaj szczegółową ofertę
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LeasingCalculator;
