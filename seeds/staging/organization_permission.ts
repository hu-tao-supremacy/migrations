import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    const permissions = [
        "ORGANIZATION_UPDATE",
        "ORGANIZATION_DELETE",
        "ORGANIZATION_MEMBERS_ADD",
        "ORGANIZATION_MEMBERS_REMOVE",
        "EVENT_CREATE",
        "EVENT_UPDATE",
        "EVENT_DELETE",
        "EVENT_TAGS_ADD",
        "EVENT_TAGS_REMOVE",
        "TAG_CREATE",
        "TAG_UPDATE",
        "TAG_DELETE",
        "FACILITY_CREATE",
        "FACILITY_UPDATE",
        "FACILITY_REMOVE",
    ];

    const data = new Array(100)
        .fill(undefined)
        .map((_, i) => {
            return new Array(permissions.length)
                .fill(undefined)
                .map((index) => {
                    return {
                        organization_id: i,
                        permission: permissions[index],
                    };
                });
        })
        .reduce((previousValue, currentValue) => {
            return [...previousValue, ...currentValue];
        }, []);

    await knex("organization_permission").insert(data);
}
