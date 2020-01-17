(ns csv-a-grafo.core
  (:require [clojure.data.csv :as csv]
            [clojure.string :as str]
            [clojure.data.json :as json]
            [clojure.pprint :refer [pprint]]))

(defn format-node-name [node]
  (-> node str/trim str/lower-case))

(defn spy [x] (pprint x) x)

(def graph
  (->> (csv/read-csv
        (slurp "resources/construccion-de-conceptos-whitehead-james.csv"))
       vec
       (#(subvec % 1))
       (mapcat (fn [[concept _ _ contrapositions]]
                 (map #(hash-map :source (format-node-name concept)
                                 :target (format-node-name %)
                                 :value 1)
                      (str/split contrapositions #","))))
       (#(let [links %
               concepts (map :source links)
               contrapositions (map :target links)
               nodes (->> (concat concepts contrapositions)
                          (group-by identity)
                          (map (fn [[k v]] {:id k
                                           :connections (count v)
                                           :group 1})))]
           {:links links
            :nodes nodes}))))

(comment
  (spit "resources/graphs/construccion-de-conceptos-whitehead-james.json"
        (json/write-str graph)))
