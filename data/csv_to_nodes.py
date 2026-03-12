import csv
import json
import sys


def split_list(value):
    if not value:
        return []
    return [v.strip() for v in value.split("|") if v.strip()]


def build_node(row):
    return {
        "id": row["id"],
        "type": row.get("type", "item"),
        "slug": row.get("slug", row["id"]),
        "name": row.get("name", ""),
        "description": row.get("description", ""),
        "parentIds": split_list(row.get("parentIds", "")),
        "status": row.get("status", "published"),
        "visibility": row.get("visibility", "public"),

        "metadata": {
            "location": row.get("location", ""),
            "type": row.get("itemType", "")
        },

        "tags": split_list(row.get("tags", "")),

        "seo": {
            "title": row.get("seo_title", ""),
            "description": row.get("seo_description", ""),
            "keywords": split_list(row.get("seo_keywords", ""))
        },

        "media": {
            "featuredImage": row.get("featuredImage", "")
        },

        "relationships": {
            "related": split_list(row.get("related", ""))
        }
    }


def convert(csv_file, output_file):
    nodes = []

    with open(csv_file, newline='', encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)

        for row in reader:
            node = build_node(row)
            nodes.append(node)

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(nodes, f, indent=2, ensure_ascii=False)

    print(f"Converted {len(nodes)} nodes → {output_file}")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python csv_to_nodes.py input.csv output.json")
    else:
        convert(sys.argv[1], sys.argv[2])